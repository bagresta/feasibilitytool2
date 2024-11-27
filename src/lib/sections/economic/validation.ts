import { EconomicSection } from '../../types'

export const validationSection: EconomicSection = {
  id: 'validation',
  title: 'Validation of model',
  maxScore: 10,
  questions: [
    {
      id: 'validation-operational',
      text: 'Were the following model validity steps performed? - Operational validation (model traces)',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'validation-methods',
      text: 'Were the following model validity steps performed? - Specify other validation methods used',
      type: 'text',
    },
  ],
}