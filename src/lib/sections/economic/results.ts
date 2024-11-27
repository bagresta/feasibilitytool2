import { EconomicSection } from '../../types'

export const resultsSection: EconomicSection = {
  id: 'results',
  title: 'Results of economic model',
  maxScore: 10,
  questions: [
    {
      id: 'results-icer',
      text: 'What is the base-case ICER?',
      type: 'text',
    },
    {
      id: 'results-precedence',
      text: 'Is there any recent examples that specify an acceptable ICER range in this therapeutic area or a similar area?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'results-acceptability',
      text: 'Is the PBAC likely to accept the base-case ICER?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'results-sensitivity',
      text: 'How sensitive is the ICER to key assumptions in sensitivity analysis?',
      type: 'text',
    },
    {
      id: 'results-realistic',
      text: 'State what is the realistic base case ICER based on best assessment of key assumptions in model',
      type: 'text',
    },
  ],
}