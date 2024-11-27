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

export interface ClinicalSection {
  id: string
  title: string
  maxScore: number
  questions: Question[]
}

export interface EconomicSection {
  id: string
  title: string
  maxScore: number
  questions: Question[]
}

export const clinicalSections: ClinicalSection[] = [
  {
    id: 'regulatory',
    title: 'Regulatory',
    maxScore: 2,
    questions: [
      {
        id: 'tga-status',
        text: 'What will be the TGA status for the product when it is appraised by the PBAC?',
        type: 'select',
        options: [
          { value: 'approved', label: 'TGA approved', score: 0 },
          { value: 'delegate-available', label: 'Delegate overview available', score: 0 },
          { value: 'delegate-not-available', label: 'Delegate overview not available', score: 1 },
        ],
      },
      {
        id: 'tga-pathway',
        text: 'What is the likely TGA pathway?',
        type: 'select',
        options: [
          { value: 'standard', label: 'Standard', score: 0 },
          { value: 'priority', label: 'Priority', score: 0 },
          { value: 'provisional', label: 'Provisional', score: 1 },
          { value: 'other', label: 'Other', score: 0 },
        ],
      },
  }    
  {
    id: 'background',
    title: 'Background Information',
    maxScore: 1,
    questions: [
      {
        id: 'background-indication',
        text: 'Is this submission the first PBS indication sought for the therapy?',
        type: 'radio',
        options: [
          { value: 'yes', label: 'Yes', score: 1 },
          { value: 'no', label: 'No', score: 0 },
        ],
      },
      {
        id: 'background-indicationtext',
        text: 'If not the first PBS indication, specify previous indication',
        type: 'text',
      },
      {
        id: 'background-subsequentindication',
        text: 'If not the first PBS indication, specify previous indication',
        type: 'text',
      },
      {
        id: 'background-tgaindication',
        text: 'Specify the TGA indication',
        type: 'text',
      },
       {
        id: 'background-pbacindication',
        text: 'Summarise PBS indication sought',
        type: 'text',
      }, 
      {
        id: 'backgroun-linetx',
        text: 'What is the line of therapy?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'adjunctive', label: 'Adjunctive', score: 1 },
          { value: 'first-line', label: 'First line', score: 2 },
          { value: 'second-line', label: 'Second line', score: 2 },
          { value: 'relapsed-refractory', label: 'Relapsed refractory', score: 2 },
          { value: 'other', label: 'Other', score: 2 },
        ]
      },
       {
        id: 'background-linetxtext',
        text: 'If other, please specify',
        type: 'text',
      },
      {
        id: 'background-orphan',
        text: 'Is the medicine an orphan drug?',
        type: 'radio',
        options: [
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 2 },
        ],
      },
  },
  {
    id: 'clinical-need',
    title: 'Clinical Need',
    maxScore: 4,
    questions: [
      {
        id: 'clinical-need-severity',
        text: 'How severe is the disease burden based on high mortality, morbidity and healthcare costs?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },
          { value: 'low', label: 'Low', score: 2 },
        ],
      },
      {
        id: 'clinical-need-unmet',
        text: 'What is the additional unmet need for new products in the particular line of therapy?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },
          { value: 'low', label: 'Low', score: 2 },
        ],
      },
        {
        id: 'clinical-need-basis',
        text: 'What is the basis of the unmet need? ',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'bsc-only-option', label: 'BSC only option', score: 0 },
          { value: 'current-therapies-ineffective-high-toxicity', label: 'Current therapies ineffective/high toxicity', score: 0 },
          { value: 'need-for-new-moa', label: 'Need for new MoA', score: 0 },
          { value: 'other', label: 'Other', score: 1 },
        ],
      },
        {
        id: 'clinical-need-',
        text: 'Specify other aspects of unmet need',
        type: 'text',
      },
  },
  {
    id: 'product-attributes',
    title: 'Product attributes',
    maxScore: 5,
    questions: [
      {
        id: 'product-attributes-text',
        text: 'Specify attributes of the product that the PBAC will view as beneficial to patient care (not including efficacy and safety), for example, oral vs current standard of care IV',
        type: 'text',
      },
  },
  {
    id: 'restriction',
    title: 'Restriction',
    maxScore: 11,
    questions: [
      {
        id: 'restriction-comparator',
        text: 'Is the requested restriction the same as that of the comparator?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },          
        ],
      },
        {
        id: 'restriction-TGA',
        text: 'Relative to the TGA indication, how would you describe the requested restriction?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'consistent', label: 'Consistent', score: 0 },
          { value: 'narrower', label: 'Narrower', score: 0 },   
          { value: 'broader', label: 'Broader', score: 1 },   
        ],
      },
        {
        id: 'restriction-eligibility',
        text: 'Is the requested restriction eligibility criteria consistent with the pivotal trial evidence population and inclusion/exclusion criteria?',
        type: '',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 }, 
          { value: 'na', label: 'NA', score: 0 }, 
        ],
      },
          {
        id: 'restriction-subgroup',
        text: 'Is the requested restriction for a subgroup of trial patients?',
        type: '',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },   
          { value: 'na', label: 'NA', score: 0 },
        ],
      },
          {
        id: 'restriction-subgrouptext',
        text: 'If so, what is the rationale for selecting the subgroup?',
          type: 'text',
      },
          {
        id: 'restriction-MBS-diagnosis',
        text: 'Does the patient eligibility criteria require an MBS funded test to confirm diagnosis?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 1 },
          { value: 'no', label: 'No', score: 0 },          
        ],
      },
          {
        id: 'restriction-MBS-funded',
        text: 'If yes, is the diagnostic test currently funded on MBS.',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },          
        ],
      },
          {
        id: 'restriction-codep',
        text: 'If the test is not currently funded, will the submission be a co-dependent submission?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 1 },
          { value: 'no', label: 'No', score: 0 },     
          { value: 'na', label: 'NA', score: 0 },
        ],
      },
          {
        id: 'restriction-rule',
        text: 'Will a continuation/stopping rule be relevant for the restriction?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 1 },
          { value: 'no', label: 'No', score: 0 },          
        ],
      },
          {
        id: 'restriction-trial-rule',
        text: 'If a continuation/stopping rule is required, is it consistent with the pivotal trial evidence and applied to economic and financial models?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },  
          { value: 'na', label: 'NA', score: 0 },
        ],
      },
            {
        id: 'restriction-leakage',
        text: 'What is the risk of potential level of leakage?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 2 },
          { value: 'medium', label: 'Medium', score: 1 },          
          { value: 'low', label: 'Low', score: 0 }, 
        ],
      },
  } ,
  {
    id: 'comparator',
    title: 'Comparator',
    maxScore: 8,
    questions: [
      {
        id: 'comparator-basis',
        text: 'What is the basis of the choice of comparator?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'same-pharmacological-class', label: 'Same pharmacological class', score: 0 },
          { value: 'higher-market-share', label: 'Higher market share for indication', score: 0 },        
          { value: 'other', label: 'Other', score: 0 },    
        ],
      },
        {
        id: 'comparator-multiple',
        text: 'Is there a need to specify multiple comparators?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 1 },
          { value: 'no', label: 'No', score: 0 },          
        ],
      },
        {
        id: 'comparator-robustdata',
        text: 'Is there robust data to quantify the choice of comparator if based on market share?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 1 },
          { value: 'no', label: 'No', score: 0 },          
        ],
      },
        {
        id: 'comparator-consensus',
        text: 'Does clinical consensus support the choice of comparator?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },          
        ],
     },
        {
        id: 'comparator-near-term',
        text: 'Are there any near-term comparators that might be appropriate to include in submission?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 1 },
          { value: 'no', label: 'No', score: 0 },          
        ],
      },
        {
        id: 'comparator-ambiguity',
        text: 'What is the level of ambiguity on whether the chosen comparator is appropriate?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 2 },
          { value: 'medium', label: 'Medium', score: 1 },          
          { value: 'low', label: 'Low', score: 0 }, 
        ],
      },
        {
        id: 'comparator-confidence',
        text: 'What is the confidence level that the PBAC will agree to the choice of comparator(s)?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },          
          { value: 'low', label: 'Low', score: 2 }, 
        ],
      },
  } ,
  {
    id: 'quality-of-trial',
    title: 'Quality of trial Design',
    maxScore: 23,
    questions: [
      {
        id: 'quality-loe',
        text: 'What is the highest level of evidence that will form the basis of the clinical claim?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'phase2', label: 'Phase II trial', score: 1 },
          { value: 'phase2-3', label: 'Phase II/III trial', score: 0 },          
          { value: 'phase3', label: 'Phase III trial', score: 0 }, 
        ],
      },
      {
        id: 'quality-design',
        text: 'What is the overall design of the pivotal evidence?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'rct-active', label: 'RCT vs appropriate active comparator', score: 0 },
          { value: 'rct-non-active', label: 'RCT vs not appropriate active comparator', score: 1 },          
          { value: 'rct-placebo', label: 'RCT vs placebo', score: 0 }, 
          { value: 'single-arm', label: 'Single arm study', score: 2 }, 
          { value: 'single-arm-control', label: 'Single arm study with historical control', score: 1 }, 
          { value: 'other', label: 'Other', score: 0 }, 
        ],
      },
      {
        id: 'quality-otherdesign',
        text: 'If other, please specify',
        type: 'text',
      },
      {
        id: 'quality-levelsbias',
        text: 'What is the level of bias based on PBAC Guidelines?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 2 },
          { value: 'medium', label: 'Medium', score: 1 },          
          { value: 'low', label: 'Low', score: 0 }, 
        ],
      },
      {
        id: 'quality-powertrial',
        text: 'If a direct trial is available vs appropriate comparator, what was the basis of the powering of the trial?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'superiority', label: 'Superiority', score: 0 },
          { value: 'non-inferiority', label: 'Non-Inferiority', score: 1 },          
          { value: 'na', label: 'NA', score: 0 }, 
        ],
      },
      {
        id: 'quality-nominated-analysis',
        text: 'If a direct RCT vs appropriate comparator is not available, what is the nominated analysis to evaluate comparative efficacy and safety vs comparator?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'itc-comaprator', label: 'ITC via common comparator', score: 1 },
          { value: 'naive-itc', label: 'Naive ITC', score: 2 },          
          { value: 'nma', label: 'NMA', score: 1 }, 
          { value: 'other', label: 'Other', score: 0 },
        ],
      },
      {
        id: 'quality-homogeneity',
        text: 'If an ITC was used for comparative efficacy and safety, rate the homogeneity of study design and patient population',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 2 },
          { value: 'medium', label: 'Medium', score: 1 },          
          { value: 'low', label: 'Low', score:0 }, 
          { value: 'na', label: 'NA', score: 0 },           
        ],
      },
      {
        id: 'quality-population',
        text: 'Are the populations used in the trials comparable in regard to inclusion/exclusion criteria',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                   
        ],
      },
      {
        id: 'quality-different-populations',
        text: 'If populations are different, specify whether the differences would be considered meaningful',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 2 },                   
        ],
      },
      {
        id: 'quality-population-key-differences',
        text: 'If populations are different, specify the key differences',
        type: 'text',
      },
        {
        id: 'quality-population-applicability',
        text: 'How applicable is the patient population in the pivotal clinical trial to the patient population that will receive the drug on the PBS?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },          
          { value: 'low', label: 'Low', score: 2 }, 
          { value: 'na', label: 'NA', score: 0 },           
        ],
      },
      {
        id: 'quality-duration',
        text: 'What is the duration of the trial?',
        type: 'select',
        options: [
          { value: 'less-year', label: '≤1 year', score: 2 },
          { value: 'two-years', label: '2 years', score: 1 },
          { value: 'three-years', label: '3 years', score: 0 },          
          { value: 'four-years', label: '4 years', score: 0 }, 
          { value: 'five-years', label: '5 years', score: 0 },           
          { value: 'more-five-years', label: '5+ years', score: 0 },
        ],
      },
      {
        id: 'quality-follow-up',
        text: 'Is there any additional patient follow-up after the trial is completed?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                   
        ],
      },
      {
        id: 'quality-number-of-years',
        text: 'If yes, state number of years',
        type: 'text',
      },
      {
        id: 'quality-ITC-homogeneity',
        text: 'If an ITC was used to evaluate comparative efficacy, rate the homogeneity of the trials for therapy and the comparators',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },          
          { value: 'low', label: 'Low', score: 2 }, 
          { value: 'na', label: 'NA', score: 0 },           
        ],
      },
      {
        id: 'quality-primary-endpoint',
        text: 'What is the primary endpoint of the pivotal clinical evidence?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'os', label: 'OS', score: 0 },
          { value: 'pfs', label: 'PFS', score: 0 },          
          { value: 'efs', label: 'EFS', score: 0 }, 
          { value: 'cr', label: 'CR', score: 0 },      
          { value: 'other', label: 'Other', score: 0 },
        ],
      },
      {
        id: 'quality-primary-endpoint_text',
        text: 'If other, please specify',
        type: 'text',
      },
      {
        id: 'quality-endpoint1',
        text: 'Specify secondary endpoints 1',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'os', label: 'OS', score: 0 },
          { value: 'pfs', label: 'PFS', score: 0 },          
          { value: 'efs', label: 'EFS', score: 0 }, 
          { value: 'cr', label: 'CR', score: 0 },      
          { value: 'other', label: 'Other', score: 0 },
        ],
      },
      {
        id: 'quality-endpoint1_text',
        text: 'If other, please specify',
        type: 'text',
      },
      {
        id: 'quality-endpoint2',
        text: 'Specify secondary endpoints 2',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'os', label: 'OS', score: 0 },
          { value: 'pfs', label: 'PFS', score: 0 },          
          { value: 'efs', label: 'EFS', score: 0 }, 
          { value: 'cr', label: 'CR', score: 0 },      
          { value: 'other', label: 'Other', score: 0 },
        ],
      },
      {
        id: 'quality-endpoint2_text',
        text: 'If other, please specify',
        type: 'text',
      },
      {
        id: 'quality-endpoint3',
        text: 'Specify secondary endpoints 3',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'os', label: 'OS', score: 0 },
          { value: 'pfs', label: 'PFS', score: 0},          
          { value: 'efs', label: 'EFS', score: 0 }, 
          { value: 'cr', label: 'CR', score: 0 },      
          { value: 'other', label: 'Other', score: 0 },
        ],
      },
      {
        id: 'quality-endpoint3_text',
        text: 'If other, please specify',
        type: 'text',
      },
      {
        id: 'quality-other-endpoints',
        text: 'Specify any other relevant secondary endpoints',
        type: 'text',
      },
      {
        id: 'quality-hrqol',
        text: 'Are there any condition specific HRQoL questionnaires in study?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                   
        ],
      },
      {
        id: 'quality-hrqol-instrument',
        text: 'If yes, please specify instrument(s)',
        type: 'text',
      },
      {
        id: 'quality-trial-instrument',
        text: 'Is there a utility instrument used in the trial?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                   
        ],
      },
      {
        id: 'quality-trial-instrument-text',
        text: 'If yes, specify instrument',
        type: 'text',
      },
      {
        id: 'quality-comparator-endpoints',
        text: 'Are the endpoints similar in comparator(s) trials?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                   
        ],
      },
      {
        id: 'quality-different-endpoints',
        text: 'If endpoints are different in comparator trials, please specify',
        type: 'text',
      },
      {
        id: 'quality-Australian-patients',
        text: 'Was there any Australian patients in the pivotal study?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                   
        ],
      },
      {
        id: 'quality-how-many-Australians',
        text: 'If Yes, state how many Australian patients?',
        type: 'text',
      },
    ],
  } ,
    {
    id: 'comparative-efficacy',
    title: 'Comparative efficacy and safety results and clinical claim',
    maxScore: 11,
    questions: [
      {
        id: 'comparative-primary-endpoint',
        text: 'Was statistical significance shown on the primary endpoint?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                   
        ],
      },
      {
        id: 'comparative-significant-difference',
        text: 'Was there a statistically significant difference in overall survival?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                   
        ],
      },
      {
        id: 'comparative-os-gain',
        text: 'What was the mean OS gain from the clinical evaluation vs the comparator?',
        type: 'text',
      },
      {
        id: 'comparative-efficacy-claim'',
        text: 'On the basis of the trial results, what will be the efficacy clinical claim?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'superiority', label: 'Superiority', score: 0 },
          { value: 'non-inferiority', label: 'Non-inferiority', score: 1 },  
          { value: 'inferiority', label: 'Inferiority', score: 2 }, 
        ],
      },
      {
        id: 'comparative-clinically-meaningful',
        text: 'If the clinical claim is superiority, is the incremental benefit considered clinically meaningful (for example, exceeding MCID threshold)',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                   
        ],
      },
      {
        id: 'comparative-safety-claim',
        text: 'On the basis of the trial results, what will be the safety claim?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'superiority', label: 'Superiority', score: 0 },
          { value: 'non-inferiority', label: 'Non-inferiority', score: 1},  
          { value: 'inferiority', label: 'Inferiority', score: 2 }, 
        ],
      },
      {
        id: 'comparative-efficacy-certainty',
        text: 'Rate the degree of certainty with the efficacy claim',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },  
          { value: 'low', label: 'Low', score: 2 }, 
          { value: 'na', label: 'NA', score: 0 }, 
        ],
      },
      {
        id: 'comparative-safety-certainty',
        text: 'Rate the degree of certainty with the safety claim',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },  
          { value: 'low', label: 'Low', score: 2 }, 
          { value: 'na', label: 'NA', score: 0 }, 
        ],
      },
      {
        id: 'comparative-uncertainty',
        text: 'If high or medium uncertainty, state and explain the areas of uncertainty?',
        type: 'text',
      },
    ],
  } 
]

  {
    id: 'cost-effectiveness-analysis',
    title: 'Type of cost-effectiveness analysis',
    maxScore: 0,
    questions: [
      {
        id: 'cea-type',
        text: ' Describe the type of cost-effectiveness analysis,
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'cea', label: ' Cost-effectiveness analysis', score: 0 },
          { value: 'cua', label: ' Cost-utility analysis', score: 0 },                
          { value: 'cba', label: 'Cost-benefit analysis', score: 0 },
          { value: 'cca', label: 'Cost-consequence analysis', score: 0 },
          { value: 'other', label: 'Other', score: 0 },                   
           ], 
     },
      {
        id: ' cea-type-other',
        text: ' If other, please specify,
        type: 'text',
      },
    ],
  },
  {
    id: 'prelim-economic-evaluation',
    title: ' Preliminary economic evaluation',
    maxScore: 0,
    questions: [
      {
        id: 'prelim-eval-type-stepped',
        text: ' Is a trial-based preliminary economic evaluation presented in the submission (Stepped evaluation)? ',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 0 },                
           ], 
      },
      {
        id: ' prelim-eval-outcomes',
        text: ' Specify outcomes used in the preliminary evaluation',
        type: 'text',
      },
    ],
  },
  {
    id: 'model-treatments',
    title: ' Treatments included in model',
    maxScore: 0,
    questions: [
      {
        id: ' model-treatments-alternative',
        text: 'Specify the alternative treatments used including dosing',
        type: 'text',
      },
    ],
  },
  {
    id: 'lit-review',
    title: ' Literature review',
    maxScore: 2,
    questions: [
      {
        id: 'lit-review-previous',
        text: ' Has a systematic review of the economic literature been undertaken on previous economic evaluations in this therapeutic area?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: lit-review-eco-eval,
        text: 'Is the economic evaluation similar/not similar to previous models in literature/PBAC PSDs?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'similar', label: 'Similar', score: 0 },
          { value: 'not-similar', label: 'Not Similar', score: 1 },                
           ], 
      },
      {
        id: lit-review-different,
        text: 'If the economic evaluation is not similar, provide justification why different?',
        type: 'text',
      },

    ],
  },
  {
    id: 'model-derivation',
    title: ' Derivation of model',
    maxScore: 0,
    questions: [
      {
        id: 'model-derivation-global',
        text: ' Is the economic model based on global vs locally developed model?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'global-mod', label: 'Global with some modification', score: 0 },
          { value: 'global-sig-mod', label: 'Global with significant adaptations', score: 0 },                
          { value: 'local', label: ' Locally developed model', score: 0 },                
           ], 
      },
    ],
  },
  {
    id: 'population',
    title: ' Population',
    maxScore: 1,
    questions: [
      {
        id: 'population'-representative,
        text: ' Is the population in the model representative of the population for whom PBS listing is sought',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'population-justification',
        text: 'If the population is different, specify and justify differences?',
        type: 'text',
      },
    ],
  },
  {
    id: 'model-methodology',
    title: ' Method used to generate model results',
    maxScore: 0,
    questions: [
      {
        id: 'model-methodology-quantification',
        text: 'What quantitative technique is used to generate results?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'psa', label: ' Partitioned Survival Analysis', score: 0 },
          { value: 'markov', label: 'Markov', score: 0 },                
          { value: 'semi-markov', label: 'Semi-Markov', score: 0 },                
          { value: 'mcs', label: 'Monte Carlo simulation', score: 0 },                
          { value: 'other', label: 'Other', score: 0 },                
           ], 
      },
      {
        id: 'model-methodology-quantification-other',
        text: 'If other, please specify',
        type: 'text',
      },
    ],
  },
  {
    id: 'software-package',
    title: 'Software package',
    maxScore: 1,
    questions: [
      {
        id: 'software-package'-model,
        text: 'What software package has been used for the model?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'excel', label: 'Excel', score: 0 },
          { value: 'treeage', label: 'TreeAge', score: 0 },                
          { value: 'excel-treeage', label: 'Excel + TreeAge', score: 0 },                
          { value: 'other', label: 'Other', score: 1 },                
           ], 
      },
      {
        id: 'software-package-model-other',
        text: 'If other, please specify',
        type: 'text',
      },
    ],
  },
  {
    id: 'time-horizon',
    title: ' Time horizon',
    maxScore: 4,
    questions: [
      {
        id: 'time-horizon-specify',
        text: ' Specify the time horizon used in the model',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'lifetime', label: 'Lifetime', score: 0 },
          { value: 'years-forty', label: '40 years', score: 0 },                
          { value: 'years-thirtyfive', label: '35 years ', score: 0 },                
          { value: 'years-thirty', label: '30 years ', score: 0 },                
          { value: 'years-twentyfive', label: '25 years', score: 0 },                
          { value: 'years-twenty', label: '20 years ', score: 0 },                
          { value: 'years-fifteen', label: '15 years ', score: 0 },                
          { value: 'years-ten', label: '10 years', score: 0 },                
          { value: 'years-five', label: '5 years ', score: 0 },                
          { value: 'years-'three, label: '3 years ', score: 0 },                
          { value: 'years-two', label: '2 years', score: 0 },                
          { value: 'years-one', label: '1 year ', score: 0 },                
          { value: 'years-less-one', label: '<1 year ', score: 0 },                
          { value: 'other', label: 'Other', score: 0 },                
           ], 
      },
      {
        id: 'time-horizon-specificy-other',
        text: 'If less than 1 year, or other, specify',
        type: 'text',
      },
      {
        id: 'time-horizon-pbac-acceptance',
        text: ' Rate the chance that the PBAC will accept the model horizon',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },                
          { value: 'low', label: 'Low', score: 2 },                
           ], 
      },
      {
        id: 'time-horizon'-pbac-will-accept,
        text: ' Specify time horizon that the PBAC is likely to accept (for example, based on previous submissions for this indication)?',
        type: 'text',
      },
      {
        id: 'time-horizon-icer-sensitive',
        text: 'How sensitive is the ICER results to time horizon?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 2 },
          { value: 'medium', label: 'Medium', score: 1 },                
          { value: 'low', label: 'Low', score: 0 },                
           ], 
      },
    ],
  },
  {
    id: 'model-structure',
    title: ' Structure of the model',
    maxScore: 0,
    questions: [
      {
        id: 'model-structure-three-state',
        text: 'Is the model a traditional 3 health state model: progression-free, progressed, dead?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 0 },                
           ], 
      },
      {
        id: 'model-structure-three-state-other',
        text: ' If No, please specify and justify health states',
        type: 'text',
      },
      {
        id: 'model-structure-half-cycle',
        text: ' If a Markov model has been used, has a half-cycle correction been applied?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 0 },                
           ], 
      },
      {
        id: 'model-structure-half-cycle-no',
        text: ' If No, please state why not',
        type: 'text',
      },
      {
        id: 'model-structure'-cycle-length,
        text: 'Specify the cycle length of the model',
        type: 'text',
      },
      {
        id: 'model-structure-discount',
        text: 'Has the PBAC recommended 5% (0% and 10%) discount rates been used in model?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 0 },                
           ], 
      },
      {
        id: 'model-structure'-discount-justification,
        text: ' If not, specify rates used with justification',
        type: 'text',
      },
    ],
  },
  {
    id: 'model-outcomes',
    title: ' Outcomes in model',
    maxScore: 0,
    questions: [
      {
        id: 'model-outcomes-specify-outcomes',
        text: ' Specify outcomes used in the economic model',
        type: 'text',
      },
    ],
  },
  {
    id: 'extrapolation-post-trial',
    title: ' Extrapolation beyond trial time horizon',
    maxScore: 0,
    questions: [
      {
        id: 'extrapolation-post-trial-tp-source-within-pivotal',
        text: ' If a Markov model was used what was the source of transition probabilities used within the pivotal evidence time period?',
        type: 'text',
      },
      {
        id: 'extrapolation-post-trial-tp-source-post-pivotal,
        text: ' If a Markov model, what was the source of transition probabilities beyond the time period of the pivotal clinical trial evidence?',
        type: 'text',
      },
    ],
  },
  {
    id: 'model-utilities',
    title: ' Utilities',
    maxScore: 3,
    questions: [
      {
        id: 'model-utilities-source',
        text: ' Specify the sources of utilities for the trial for the new therapy?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'pivotal-trial', label: 'Pivotal trial(s)', score: 0 },
          { value: 'pivotal-trial-lit-review', label: 'Pivotal trial + literature review', score: 0 },                
          { value: 'lit-review', label: 'Literature review', score: 0 },                
          { value: 'other', label: 'Other', score: 1 },                
           ], 
      },
      {
        id: 'model-utilities-source-other',
        text: 'If other, please specify',
        type: 'text',
      },
      {
        id: 'model-utilities-comparator',
        text: 'Specify the sources of utility values for the comparator(s)?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'pivotal-trial', label: 'Pivotal trial(s)', score: 0 },
          { value: 'pivotal-trial-lit-review', label: 'Pivotal trial + literature review', score: 0 },                
          { value: 'lit-review', label: 'Literature review', score: 0 },                
          { value: 'other', label: 'Other', score: 1 },                
           ], 
      },
      {
        id: 'model-utilities-comparator-other',
        text: ' If other, please specify',
        type: 'text',
      },
     {
        id: 'model-utilities'-ae,
        text: ' Were utilities associated with adverse events included in model?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
     {
        id: 'model-utilities-ae-not',
        text: 'If not, please specify why not',
        type: 'text',
      },
    ],
  },
  {
    id: 'resource-use',
    title: ' Resource use',
    maxScore: 7,
    questions: [
      {
        id: 'resource-use-categories',
        text: 'Specify key resource use categories used in the model other than new therapy and comparator drug costs',
        type: 'text',
      },
      {
        id: 'resource-use-drug-admin',
        text: 'Were Drug administration costs included?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'resource-use-ae',
        text: ' Were Adverse event costs included?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'resource-use-disease-management',
        text: ' Were Disease management costs included?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'resource-use-subsequent-tx',
        text: ' Were Subsequent treatment costs included?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'resource-use-hospital-costs',
        text: ' Were Hospitalisation costs included?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'resource-use-monitoring-costs',
        text: ' Were Monitoring costs included?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'resource-use-gp-costs',
        text: ' Were GP or specialist costs included? ',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'resource-use-other-costs',
        text: ' Were other costs included? ',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'resource-use-other-costs-other',
        text: ' If other costs, please specify',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
    ],
  },
  {
    id: 'model-validation',
    title: ' Validation of model',
    maxScore: 1,
    questions: [
      {
        id: 'model-validation-operational-validation',
        text: ' Were the following model validity steps performed? - Operational validation (model traces)',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'model-validation-other-validation',
        text: ' Were the following model validity steps performed? - specify other validation methods used ',
        type: 'text',
      },
    ],
  },
  {
    id: 'internal-assessment',
    title: ' Internal assessment of quality of model - Rate the following aspects of the model with respect to likely Evaluator/ESC/PBAC reviews and conclusions',
    maxScore: 18,
    questions: [
      {
        id: 'internal-assessment-overall-validity',
        text: 'Overall validity of the model',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },                
          { value: 'low', label: 'Low', score: 2 },                
           ], 
      },
      {
        id: 'internal-assessment-health-state-suitability',
        text: ' Suitability of the health states for disease area and pivotal evidence',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },                
          { value: 'low', label: 'Low', score: 2 },                
           ], 
      },
      {
        id: 'internal-assessment-appropriateness',
        text: ' Appropriateness of method used to derive results (e.g., Markov model)',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },                
          { value: 'low', label: 'Low', score: 2 },                
           ], 
      },
      {
        id: 'internal-assessment-likelihood',
        text: 'Likelihood of PBAC to accept duration of model',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },                
          { value: 'low', label: 'Low', score: 2 },                
           ], 
      },
      {
        id: 'internal-assessment-tp-source',
        text: ' Sources of and results for transition probabilities (if appropriate)',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },                
          { value: 'low', label: 'Low', score: 2 },                
           ], 
      },
      {
        id: 'internal-assessment'-extrapolation-source,
        text: 'Choice of extrapolation method used',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },                
          { value: 'low', label: 'Low', score: 2 },                
           ], 
      },
      {
        id: 'internal-assessment-utilities',
        text: 'Utilities used for model',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },                
          { value: 'low', label: 'Low', score: 2 },                
           ], 
      },
      {
        id: 'internal-assessment-resource-use',
        text: 'Resource use and any cost-offsets for model',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },                
          { value: 'low', label: 'Low', score: 2 },                
           ], 
      },
      {
        id: 'internal-assessment-model-validation',
        text: 'Validation of the model',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'high', label: 'High', score: 0 },
          { value: 'medium', label: 'Medium', score: 1 },                
          { value: 'low', label: 'Low', score: 2 },                
           ], 
      },
    ],
  },
  {
    id: 'model-results',
    title: ' Results of economic model',
    maxScore: 2,
    questions: [
      {
        id: 'model-results'-icer,
        text: 'What is the base-case ICER?',
        type: 'text',
      },
      {
        id: 'model-results-icer-precedence',
        text: 'Is there any recent examples that specify an acceptable ICER range in this therapeutic area or a similar area?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'model-results-icer-acceptability',
        text: 'Is the PBAC likely to accept the base-case ICER?',
        type: 'select',
        options: [
          { value: '-', label: '-', score: 0 },
          { value: 'yes', label: 'Yes', score: 0 },
          { value: 'no', label: 'No', score: 1 },                
           ], 
      },
      {
        id: 'model-results-icer-sensitive',
        text: ' How sensitive is the ICER to key assumptions in sensitivity analysis?',
        type: 'text',
      },
      {
        id: 'model-results-pbac-realistic',
        text: ' State what is the realistic base case ICER based on best assessment of key assumptions in model',
        type: 'text',
      },
    ],
  },



