import { ClinicalSection } from '../types'

export const regulatorySection: ClinicalSection = {
  id: 'regulatory',
  title: 'Regulatory',
  maxScore: 10,
  questions: [
    {
      id: 'first-pbs',
      text: 'Is this submission the first PBS indication sought for the therapy?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'previous-indication',
      text: 'If not the first PBS indication, specify previous indication',
      type: 'text',
    },
    {
      id: 'tga-indication',
      text: 'Specify the TGA indication',
      type: 'text',
    },
    {
      id: 'pbs-indication',
      text: 'Summarise PBS indication sought',
      type: 'text',
    },
    {
      id: 'therapy-line',
      text: 'What is the line of therapy?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'adjunctive', label: 'Adjunctive', score: 1 },
        { value: 'first-line', label: 'First line', score: 2 },
        { value: 'second-line', label: 'Second line', score: 2 },
        { value: 'relapsed-refractory', label: 'Relapsed refractory', score: 2 },
        { value: 'other', label: 'Other', score: 2 },
      ],
    },
    {
      id: 'other-therapy-line',
      text: 'If other, please specify',
      type: 'text',
    },
    {
      id: 'orphan-drug',
      text: 'Is the medicine an orphan drug?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
  ],
}

export const clinicalNeedSection: ClinicalSection = {
  id: 'clinical-need',
  title: 'Clinical Need',
  maxScore: 5,
  questions: [
    {
      id: 'disease-burden',
      text: 'How severe is the disease burden based on high mortality, morbidity and healthcare costs?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'high', label: 'High', score: 1 },
        { value: 'medium', label: 'Medium', score: 2 },
        { value: 'low', label: 'Low', score: 2 },
      ],
    },
    {
      id: 'unmet-need',
      text: 'What is the additional unmet need for new products in the particular line of therapy?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'high', label: 'High', score: 1 },
        { value: 'medium', label: 'Medium', score: 2 },
        { value: 'low', label: 'Low', score: 2 },
      ],
    },
    {
      id: 'unmet-need-basis',
      text: 'What is the basis of the unmet need?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'bsc-only', label: 'BSC only option', score: 1 },
        { value: 'ineffective-current', label: 'Current therapies ineffective/high toxicity', score: 2 },
        { value: 'new-moa', label: 'Need for new MoA', score: 1 },
        { value: 'other', label: 'Other', score: 1 },
      ],
    },
    {
      id: 'unmet-need-other',
      text: 'Specify other aspects of unmet need',
      type: 'text',
    },
  ],
}

export const productAttributesSection: ClinicalSection = {
  id: 'product-attributes',
  title: 'Product Attributes',
  maxScore: 5,
  questions: [
    {
      id: 'beneficial-attributes',
      text: 'Specify attributes of the product that the PBAC will view as beneficial to patient care (not including efficacy and safety), for example, oral vs current standard of care IV',
      type: 'text',
    },
  ],
}

export const restrictionSection: ClinicalSection = {
  id: 'restriction',
  title: 'Restriction',
  maxScore: 10,
  questions: [
    {
      id: 'restriction-comparator',
      text: 'Is the requested restriction the same as that of the comparator?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'restriction-tga',
      text: 'Relative to the TGA indication, how would you describe the requested restriction?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'consistent', label: 'Consistent', score: 0 },
        { value: 'narrower', label: 'Narrower', score: 2 },
        { value: 'broader', label: 'Broader', score: 2 },
      ],
    },
    {
      id: 'restriction-eligibility',
      text: 'Is the requested restriction eligibility criteria consistent with the pivotal trial evidence population and inclusion/exclusion criteria?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
        { value: 'na', label: 'NA', score: 2 },
      ],
    },
    {
      id: 'restriction-subgroup',
      text: 'Is the requested restriction for a subgroup of trial patients?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
        { value: 'na', label: 'NA', score: 2 },
      ],
    },
    {
      id: 'restriction-subgroup-rationale',
      text: 'If so, what is the rationale for selecting the subgroup?',
      type: 'text',
    },
    {
      id: 'restriction-mbs-diagnosis',
      text: 'Does the patient eligibility criteria require an MBS funded test to confirm diagnosis?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'restriction-mbs-funded',
      text: 'If yes, is the diagnostic test currently funded on MBS?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'restriction-codependent',
      text: 'If the test is not currently funded, will the submission be a co-dependent submission?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
        { value: 'na', label: 'NA', score: 2 },
      ],
    },
    {
      id: 'restriction-continuation',
      text: 'Will a continuation/stopping rule be relevant for the restriction?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'restriction-continuation-consistent',
      text: 'If a continuation/stopping rule is required, is it consistent with the pivotal trial evidence and applied to economic and financial models?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
        { value: 'na', label: 'NA', score: 2 },
      ],
    },
    {
      id: 'restriction-leakage',
      text: 'What is the risk of potential level of leakage?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'high', label: 'High', score: 0 },
        { value: 'medium', label: 'Medium', score: 2 },
        { value: 'low', label: 'Low', score: 2 },
      ],
    },
  ],
}

export const comparatorSection: ClinicalSection = {
  id: 'comparator',
  title: 'Choice of comparator',
  maxScore: 10,
  questions: [
    {
      id: 'comparator-basis',
      text: 'What is the basis of the choice of comparator?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'same-class', label: 'Same pharmacological class', score: 0 },
        { value: 'market-share', label: 'Higher market share for indication', score: 2 },
        { value: 'other', label: 'Other', score: 2 },
      ],
    },
    {
      id: 'comparator-multiple',
      text: 'Is there a need to specify multiple comparators?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'comparator-data',
      text: 'Is there robust data to quantify the choice of comparator if based on market share?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'comparator-consensus',
      text: 'Does clinical consensus support the choice of comparator?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'comparator-near-term',
      text: 'Are there any near-term comparators that might be appropriate to include in submission?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    {
      id: 'comparator-ambiguity',
      text: 'What is the level of ambiguity on whether the chosen comparator is appropriate?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'high', label: 'High', score: 0 },
        { value: 'medium', label: 'Medium', score: 2 },
        { value: 'low', label: 'Low', score: 2 },
      ],
    },
    {
      id: 'comparator-confidence',
      text: 'What is the confidence level that the PBAC will agree to the choice of comparator(s)?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'high', label: 'High', score: 0 },
        { value: 'medium', label: 'Medium', score: 2 },
        { value: 'low', label: 'Low', score: 2 },
      ],
    },
  ],
}

export const trialDesignSection: ClinicalSection = {
  id: 'trial-design',
  title: 'Quality of trial Design',
  maxScore: 15,
  questions: [
    {
      id: 'trial-evidence-level',
      text: 'What is the highest level of evidence that will form the basis of the clinical claim?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'phase2', label: 'Phase II trial', score: 0 },
        { value: 'phase2-3', label: 'Phase II/III trial', score: 2 },
        { value: 'phase3', label: 'Phase III trial', score: 2 },
      ],
    },
    // ... continuing with all trial design questions
  ],
}

export const comparativeResultsSection: ClinicalSection = {
  id: 'comparative-results',
  title: 'Comparative efficacy and safety results and clinical claim',
  maxScore: 10,
  questions: [
    {
      id: 'primary-endpoint-significance',
      text: 'Was statistical significance shown on the primary endpoint?',
      type: 'select',
      options: [
        { value: '-', label: '-', score: 0 },
        { value: 'yes', label: 'Yes', score: 0 },
        { value: 'no', label: 'No', score: 2 },
      ],
    },
    // ... continuing with all comparative results questions
  ],
}