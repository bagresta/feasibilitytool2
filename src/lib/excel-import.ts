import { read, utils } from 'xlsx';
import { clinicalSections, economicSections } from './evaluation-data';

interface ImportedData {
  clinicalResponses: Record<string, string>;
  economicResponses: Record<string, string>;
}

export async function importFromExcel(file: File): Promise<ImportedData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = utils.sheet_to_json<any>(worksheet);

        const clinicalResponses: Record<string, string> = {};
        const economicResponses: Record<string, string> = {};

        jsonData.forEach((row) => {
          if (!row.Type || !row.Question || !row.Response) return;

          // Skip total score rows and empty rows
          if (row.Question.includes('Total') || !row.Question.trim()) return;

          const questionText = row.Question;
          const response = row.Response;

          // Find the corresponding question in the evaluation data
          if (row.Type === 'Clinical') {
            const questionId = findQuestionIdByText(questionText, 'clinical');
            if (questionId) {
              clinicalResponses[questionId] = findResponseValueByLabel(response, questionId, 'clinical');
            }
          } else if (row.Type === 'Economic') {
            const questionId = findQuestionIdByText(questionText, 'economic');
            if (questionId) {
              economicResponses[questionId] = findResponseValueByLabel(response, questionId, 'economic');
            }
          }
        });

        resolve({
          clinicalResponses,
          economicResponses,
        });
      } catch (error) {
        console.error('Error parsing Excel file:', error);
        reject(new Error('Failed to parse Excel file. Please ensure you are using a valid export file.'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsArrayBuffer(file);
  });
}

function findQuestionIdByText(text: string, type: 'clinical' | 'economic'): string | undefined {
  const sections = type === 'clinical' ? clinicalSections : economicSections;
  
  for (const section of sections) {
    const question = section.questions.find(q => q.text === text);
    if (question) {
      return question.id;
    }
  }
  return undefined;
}

function findResponseValueByLabel(label: string, questionId: string, type: 'clinical' | 'economic'): string {
  const sections = type === 'clinical' ? clinicalSections : economicSections;
  
  for (const section of sections) {
    const question = section.questions.find(q => q.id === questionId);
    if (question?.options) {
      const option = question.options.find(opt => opt.label === label);
      if (option) {
        return option.value;
      }
    }
  }
  return label; // Return original label for text inputs
}