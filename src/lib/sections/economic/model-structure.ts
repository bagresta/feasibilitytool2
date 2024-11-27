import { EconomicSection } from '../../types'

export const modelStructureSection: EconomicSection = {
  id: 'model-structure',
  title: 'Structure of the model',
  maxScore: 10,
  questions: [
    {
      id: 'model-structure-three-state',
      text: 'Is the model a traditional 3 health state model: progression-free, progressed, dead?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'model-structure-health-states',
      text: 'If No, please specify and justify health states',
      type: 'text',
    },
    {
      id: 'model-structure-half-cycle',
      text: 'If a Markov model has been used, has a half-cycle correction been applied?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'model-structure-half-cycle-justification',
      text: 'If No, please state why not',
      type: 'text',
    },
    {
      id: 'model-structure-cycle-length',
      text: 'Specify the cycle length of the model',
      type: 'text',
    },
    {
      id: 'model-structure-discount-rate',
      text: 'Has the PBAC recommended 5% (0% and 10%) discount rates been used in model?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'model-structure-discount-rate-justification',
      text: 'If not, specify rates used with justification',
      type: 'text',
    },
  ],
}