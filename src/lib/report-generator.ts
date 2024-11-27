import { utils, writeFile } from 'xlsx';
import { jsPDF } from 'jspdf';
import { clinicalSections, economicSections } from './evaluation-data';

async function addHeaderToPDF(pdf: jsPDF) {
  const logoUrl = '/lucid-health-logo.png';
  
  try {
    const response = await fetch(logoUrl);
    const blob = await response.blob();
    const reader = new FileReader();
    
    return new Promise<void>((resolve) => {
      reader.onloadend = () => {
        const base64data = reader.result as string;
        
        const logoWidth = 180;
        const logoHeight = 60;
        const pageWidth = pdf.internal.pageSize.width;
        const xPos = (pageWidth - logoWidth) / 2;
        
        pdf.addImage(base64data, 'PNG', xPos, 10, logoWidth, logoHeight);
        pdf.setFontSize(24);
        pdf.setTextColor(0, 87, 184);
        pdf.text('FAST Tool Report', pdf.internal.pageSize.width / 2, 90, { align: 'center' });
        pdf.setTextColor(0, 0, 0);
        
        resolve();
      };
      
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error loading logo:', error);
    // Continue without logo if it fails to load
    pdf.setFontSize(24);
    pdf.setTextColor(0, 87, 184);
    pdf.text('FAST Tool Report', pdf.internal.pageSize.width / 2, 30, { align: 'center' });
    pdf.setTextColor(0, 0, 0);
  }
}

function getQuestionResponse(questionId: string, responses: Record<string, string>, sections: typeof clinicalSections | typeof economicSections) {
  const response = responses[questionId];
  if (!response) return 'Not answered';

  for (const section of sections) {
    const question = section.questions.find(q => q.id === questionId);
    if (question) {
      if (question.type === 'text') return response;
      const option = question.options?.find(opt => opt.value === response);
      return option ? option.label : response;
    }
  }
  return response;
}

export async function generateCombinedReport(
  clinicalResponses: Record<string, string>,
  clinicalScores: Record<string, number>,
  clinicalTotalScore: number,
  economicResponses: Record<string, string>,
  economicScores: Record<string, number>,
  economicTotalScore: number
) {
  // Generate Excel report
  const workbook = utils.book_new();
  const data: any[] = [];

  // Add clinical data
  clinicalSections.forEach(section => {
    data.push(['Clinical', section.title, '', '']);
    section.questions.forEach(question => {
      data.push([
        'Clinical',
        question.text,
        getQuestionResponse(question.id, clinicalResponses, clinicalSections),
        clinicalScores[section.id] || 0
      ]);
    });
  });
  data.push(['Clinical', 'Total Clinical Score', '', clinicalTotalScore]);

  // Add economic data
  economicSections.forEach(section => {
    data.push(['Economic', section.title, '', '']);
    section.questions.forEach(question => {
      data.push([
        'Economic',
        question.text,
        getQuestionResponse(question.id, economicResponses, economicSections),
        economicScores[section.id] || 0
      ]);
    });
  });
  data.push(['Economic', 'Total Economic Score', '', economicTotalScore]);

  const worksheet = utils.aoa_to_sheet([
    ['Type', 'Question', 'Response', 'Score'],
    ...data
  ]);

  utils.book_append_sheet(workbook, worksheet, 'FAST Tool Report');
  writeFile(workbook, 'fast-tool-report.xlsx');

  // Generate PDF report
  const pdf = new jsPDF();
  await addHeaderToPDF(pdf);

  let yPos = 100;
  const lineHeight = 10;
  const margin = 20;
  const pageWidth = pdf.internal.pageSize.width;

  pdf.setFontSize(16);
  pdf.setTextColor(0, 87, 184);
  pdf.text('Clinical Evaluation', margin, yPos);
  yPos += lineHeight * 1.5;

  pdf.setFontSize(12);
  pdf.setTextColor(0, 0, 0);

  clinicalSections.forEach(section => {
    // Check if we need a new page
    if (yPos > pdf.internal.pageSize.height - 50) {
      pdf.addPage();
      yPos = 30;
    }

    pdf.setFontSize(14);
    pdf.text(section.title, margin, yPos);
    yPos += lineHeight;
    pdf.setFontSize(12);

    section.questions.forEach(question => {
      if (yPos > pdf.internal.pageSize.height - 50) {
        pdf.addPage();
        yPos = 30;
      }

      const response = getQuestionResponse(question.id, clinicalResponses, clinicalSections);
      const text = `${question.text}: ${response}`;
      const lines = pdf.splitTextToSize(text, pageWidth - (margin * 2));
      pdf.text(lines, margin, yPos);
      yPos += lineHeight * lines.length;
    });
    yPos += lineHeight;
  });

  // Add clinical total score
  pdf.setFontSize(14);
  pdf.text(`Total Clinical Score: ${clinicalTotalScore}`, margin, yPos);
  yPos += lineHeight * 2;

  // Add economic evaluation
  pdf.addPage();
  yPos = 30;

  pdf.setFontSize(16);
  pdf.setTextColor(0, 87, 184);
  pdf.text('Economic Evaluation', margin, yPos);
  yPos += lineHeight * 1.5;

  pdf.setFontSize(12);
  pdf.setTextColor(0, 0, 0);

  economicSections.forEach(section => {
    if (yPos > pdf.internal.pageSize.height - 50) {
      pdf.addPage();
      yPos = 30;
    }

    pdf.setFontSize(14);
    pdf.text(section.title, margin, yPos);
    yPos += lineHeight;
    pdf.setFontSize(12);

    section.questions.forEach(question => {
      if (yPos > pdf.internal.pageSize.height - 50) {
        pdf.addPage();
        yPos = 30;
      }

      const response = getQuestionResponse(question.id, economicResponses, economicSections);
      const text = `${question.text}: ${response}`;
      const lines = pdf.splitTextToSize(text, pageWidth - (margin * 2));
      pdf.text(lines, margin, yPos);
      yPos += lineHeight * lines.length;
    });
    yPos += lineHeight;
  });

  // Add economic total score
  pdf.setFontSize(14);
  pdf.text(`Total Economic Score: ${economicTotalScore}`, margin, yPos);

  pdf.save('fast-tool-report.pdf');
}