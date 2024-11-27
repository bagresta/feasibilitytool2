import { ClinicalSection, EconomicSection } from './types'
import {
  regulatorySection,
  clinicalNeedSection,
  productAttributesSection,
  restrictionSection,
  comparatorSection,
  trialDesignSection,
  comparativeResultsSection,
} from './sections/clinical-sections'
import { economicSections } from './sections/economic-sections'

export const clinicalSections: ClinicalSection[] = [
  regulatorySection,
  clinicalNeedSection,
  productAttributesSection,
  restrictionSection,
  comparatorSection,
  trialDesignSection,
  comparativeResultsSection,
]

export { economicSections }