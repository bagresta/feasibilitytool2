import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { ClinicalEvaluation } from "@/components/ClinicalEvaluation"
import { EconomicEvaluation } from "@/components/EconomicEvaluation"
import { FileText, RotateCcw, Upload } from "lucide-react"
import { generateCombinedReport } from "@/lib/report-generator"
import { importFromExcel } from "@/lib/excel-import"

export default function EvaluationChecklist() {
  const [activeEvaluation, setActiveEvaluation] = useState<'clinical' | 'economic'>('clinical')
  const [clinicalResponses, setClinicalResponses] = useState<Record<string, string>>({})
  const [clinicalScores, setClinicalScores] = useState<Record<string, number>>({})
  const [clinicalTotalScore, setClinicalTotalScore] = useState(0)
  const [economicResponses, setEconomicResponses] = useState<Record<string, string>>({})
  const [economicScores, setEconomicScores] = useState<Record<string, number>>({})
  const [economicTotalScore, setEconomicTotalScore] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleCreateCombinedReport = () => {
    generateCombinedReport(
      clinicalResponses,
      clinicalScores,
      clinicalTotalScore,
      economicResponses,
      economicScores,
      economicTotalScore
    )
  }

  const handleRestart = () => {
    if (window.confirm('Are you sure you want to restart? This will clear all your answers.')) {
      setClinicalResponses({})
      setClinicalScores({})
      setClinicalTotalScore(0)
      setEconomicResponses({})
      setEconomicScores({})
      setEconomicTotalScore(0)
      setActiveEvaluation('clinical')
      localStorage.removeItem('clinicalResponses')
      localStorage.removeItem('economicResponses')
    }
  }

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const { clinicalResponses: importedClinical, economicResponses: importedEconomic } = 
        await importFromExcel(file)
      
      localStorage.setItem('clinicalResponses', JSON.stringify(importedClinical))
      localStorage.setItem('economicResponses', JSON.stringify(importedEconomic))
      
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      
      alert('Data imported successfully! The page will now refresh.')
      window.location.reload()
    } catch (error) {
      console.error('Error importing file:', error)
      alert(error instanceof Error ? error.message : 'Error importing file. Please try again.')
    }
  }

  useState(() => {
    const savedClinicalResponses = localStorage.getItem('clinicalResponses')
    const savedEconomicResponses = localStorage.getItem('economicResponses')
    
    if (savedClinicalResponses) {
      setClinicalResponses(JSON.parse(savedClinicalResponses))
    }
    if (savedEconomicResponses) {
      setEconomicResponses(JSON.parse(savedEconomicResponses))
    }
  })

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex flex-col items-center mb-8">
        <div className="w-full flex flex-col items-center mb-6">
          <div className="flex items-center justify-center w-full mb-4">
            <img 
              src="/lucid-health-logo.png"
              alt="Lucid Health Consulting Logo"
              className="h-24 object-contain"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <h1 className="text-3xl font-bold">FAST Tool</h1>
            <div className="flex gap-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImport}
                accept=".xlsx"
                className="hidden"
              />
              <Button 
                onClick={() => fileInputRef.current?.click()} 
                variant="outline"
                className="flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Import Data
              </Button>
              <Button 
                onClick={handleRestart} 
                variant="outline"
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Restart
              </Button>
              <Button 
                onClick={handleCreateCombinedReport} 
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Create Combined Report
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <Button 
          onClick={() => setActiveEvaluation('clinical')} 
          variant={activeEvaluation === 'clinical' ? 'default' : 'outline'}
          className="w-40"
        >
          Clinical
        </Button>
        <Button 
          onClick={() => setActiveEvaluation('economic')} 
          variant={activeEvaluation === 'economic' ? 'default' : 'outline'}
          className="w-40"
        >
          Economic
        </Button>
      </div>
      {activeEvaluation === 'clinical' ? (
        <ClinicalEvaluation 
          onResponsesChange={setClinicalResponses}
          onScoresChange={setClinicalScores}
          onTotalScoreChange={setClinicalTotalScore}
          initialResponses={clinicalResponses}
        />
      ) : (
        <EconomicEvaluation 
          onResponsesChange={setEconomicResponses}
          onScoresChange={setEconomicScores}
          onTotalScoreChange={setEconomicTotalScore}
          initialResponses={economicResponses}
        />
      )}
    </div>
  )
}