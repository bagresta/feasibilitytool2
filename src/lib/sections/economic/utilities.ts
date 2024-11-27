import { EconomicSection } from '../../types'

export const utilitiesSection: EconomicSection = {
  id: 'utilities',
  title: 'Utilities',
  maxScore: 10,
  questions: [
    {
      id: 'utilities-source',
      text: 'Specify the sources of utilities for the trial for the new therapy?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'pivotal-trial', label: 'Pivotal Trial(s)', score: 0 },
        { value: 'pivotal-trial-lit-review', label: 'Pivotal Trial(s) + Literature Review', score: 2 },
        { value: 'lit-review', label: 'Literature Review', score: 0 },
        { value: 'other', label: 'Other', score: 2 },
      ],
    },
    {
      id: 'utilities-source-other',
      text: 'If other, please specify',
      type: 'text',
    },
    {
      id: 'utilities-source-comparator',
      text: 'Specify the sources of utility values for the comparator(s)?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'pivotal-trial', label: 'Pivotal Trial(s)', score: 0 },
        { value: 'pivotal-trial-lit-review', label: 'Pivotal Trial(s) + Literature Review', score: 2 },
        { value: 'lit-review', label: 'Literature Review', score: 0 },
        { value: 'other', label: 'Other', score: 2 },
      ],
    },
    {
      id: 'utilities-source-comparator-other',
      text: 'If other, please specify',
      type: 'text',
    },
    {
      id: 'utilities-ae',
      text: 'Were utilities associated with adverse events included in model?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'utilities-ae-justification',
      text: 'If not, please specify why not',
      type: 'text',
    },
  ],
}