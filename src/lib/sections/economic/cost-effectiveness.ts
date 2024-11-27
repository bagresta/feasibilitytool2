import { EconomicSection } from '../../types'

export const costEffectivenessSection: EconomicSection = {
  id: 'cost-effectiveness-analysis',
  title: 'Type of cost-effectiveness analysis',
  maxScore: 5,
  questions: [
    {
      id: 'analysis-type',
      text: 'Describe the type of cost-effectiveness analysis',
      type: 'select',
      options: [
        { value: 'cost-effectiveness', label: 'Cost-effectiveness analysis', score: 0 },
        { value: 'cost-utility', label: 'Cost-utility analysis', score: 0 },
        { value: 'cost-benefit', label: 'Cost-benefit analysis', score: 2 },
        { value: 'cost-consequence', label: 'Cost-consequence analysis', score: 3 },
        { value: 'other', label: 'Other', score: 5 },
      ],
    },
    {
      id: 'other-analysis-type',
      text: 'If other, please specify',
      type: 'text',
    },
  ],
}