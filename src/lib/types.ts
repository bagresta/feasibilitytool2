export interface Question {
  id: string
  text: string
  type: 'radio' | 'select' | 'text'
  options?: Array<{
    value: string
    label: string
    score: number
  }>
}

export interface Section {
  id: string
  title: string
  maxScore: number
  questions: Question[]
}

export interface ClinicalSection extends Section {}
export interface EconomicSection extends Section {}