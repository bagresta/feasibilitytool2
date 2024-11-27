import { EconomicSection } from '../../types'

export const resourceUseSection: EconomicSection = {
  id: 'resource-use',
  title: 'Resource Use',
  maxScore: 10,
  questions: [
    {
      id: 'resource-use-categories',
      text: 'Specify key resource use categories used in the model other than new therapy and comparator drug costs',
      type: 'text',
    },
    {
      id: 'resource-use-drug-admin',
      text: 'Drug administration costs',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'resource-use-ae',
      text: 'Adverse event costs',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'resource-use-disease-management',
      text: 'Disease management costs',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'resource-use-subsequent-tx',
      text: 'Subsequent treatment costs',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'resource-use-hospital',
      text: 'Hospitalisation costs',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'resource-use-monitoring',
      text: 'Monitoring costs',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'resource-use-gp',
      text: 'GP or specialist costs',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'resource-use-other',
      text: 'Other costs',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'resource-use-other-specify',
      text: 'Other costs, please specify',
      type: 'text',
    },
  ],
}