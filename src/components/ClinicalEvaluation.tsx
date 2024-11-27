'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { type ClinicalSection, clinicalSections } from '../lib/evaluation-data'

interface ClinicalQuestion {
  id: string
  text: string
  type: 'radio' | 'select' | 'text'
  options?: Array<{
    value: string
    label: string
    score: number
  }>
}

interface ClinicalEvaluationProps {
  onResponsesChange: (responses: Record<string, string>) => void
  onScoresChange: (scores: Record<string, number>) => void
  onTotalScoreChange: (total: number) => void
  initialResponses: Record<string, string>
}

export function ClinicalEvaluation({ 
  onResponsesChange,
  onScoresChange,
  onTotalScoreChange,
  initialResponses
}: ClinicalEvaluationProps) {
  const [responses, setResponses] = useState<Record<string, string>>(initialResponses || {})
  const [scores, setScores] = useState<Record<string, number>>({})

  const handleResponse = (questionId: string, value: string) => {
    const newResponses = { ...responses, [questionId]: value }
    setResponses(newResponses)
    onResponsesChange(newResponses)

    // Save to localStorage
    localStorage.setItem('clinicalResponses', JSON.stringify(newResponses))
  }

  useEffect(() => {
    const newScores: Record<string, number> = {}
    let totalScore = 0

    clinicalSections.forEach(section => {
      let sectionScore = 0
      section.questions.forEach(question => {
        if (question.type !== 'text') {
          const selectedOption = question.options?.find(opt => opt.value === responses[question.id])
          if (selectedOption) {
            sectionScore += selectedOption.score
          }
        }
      })
      newScores[section.id] = sectionScore
      totalScore += sectionScore
    })

    setScores(newScores)
    onScoresChange(newScores)
    onTotalScoreChange(totalScore)
  }, [responses, onScoresChange, onTotalScoreChange])

  const getMaxTotalScore = () => clinicalSections.reduce((sum, section) => sum + section.maxScore, 0)

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100
    if (percentage <= 33) return 'bg-green-500'
    if (percentage <= 66) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const renderQuestion = (question: ClinicalQuestion) => {
    switch (question.type) {
      case 'radio':
        return (
          <RadioGroup 
            value={responses[question.id]} 
            onValueChange={(value) => handleResponse(question.id, value)}
          >
            {question.options?.map(option => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                <Label htmlFor={`${question.id}-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        )
      case 'select':
        return (
          <Select 
            value={responses[question.id]} 
            onValueChange={(value) => handleResponse(question.id, value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {question.options?.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case 'text':
        return (
          <Textarea 
            value={responses[question.id] || ''} 
            onChange={(e) => handleResponse(question.id, e.target.value)} 
            placeholder="Enter your response"
            className="w-full"
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {clinicalSections.map(section => (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{section.title}</span>
                <span className={`text-sm px-2 py-1 rounded text-white ${getScoreColor(scores[section.id] || 0, section.maxScore)}`}>
                  Score: {scores[section.id] || 0} / {section.maxScore}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {section.questions.map(question => (
                <div key={question.id} className="space-y-3">
                  <Label className="text-base font-medium">{question.text}</Label>
                  <div className="pt-2">
                    {renderQuestion(question)}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overall Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {clinicalSections.map(section => (
              <div key={section.id} className="flex justify-between items-center">
                <span className="font-medium">{section.title}</span>
                <span className={`px-3 py-1 rounded text-white ${getScoreColor(scores[section.id] || 0, section.maxScore)}`}>
                  {scores[section.id] || 0} / {section.maxScore}
                </span>
              </div>
            ))}
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center font-bold">
                <span>Total Clinical Score</span>
                <span className={`px-3 py-1 rounded text-white ${
                  getScoreColor(
                    Object.values(scores).reduce((a, b) => a + b, 0),
                    getMaxTotalScore()
                  )
                }`}>
                  {Object.values(scores).reduce((a, b) => a + b, 0)} / {getMaxTotalScore()}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}