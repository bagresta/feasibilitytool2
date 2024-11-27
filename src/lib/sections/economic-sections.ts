import { EconomicSection } from '../types'
import { costEffectivenessSection } from './economic/cost-effectiveness'
import { modelStructureSection } from './economic/model-structure'
import { utilitiesSection } from './economic/utilities'
import { resourceUseSection } from './economic/resource-use'
import { validationSection } from './economic/validation'
import { resultsSection } from './economic/results'

export const economicSections: EconomicSection[] = [
  costEffectivenessSection,
  modelStructureSection,
  utilitiesSection,
  resourceUseSection,
  validationSection,
  resultsSection,
]