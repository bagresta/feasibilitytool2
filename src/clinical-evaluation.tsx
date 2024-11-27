'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { type ClinicalSection, clinicalSections } from './evaluation-data'

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

export function ClinicalEvaluation() {
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [scores, setScores] = useState<Record<string, number>>({})

  const handleResponse = (questionId: string, value: string) => {
    setResponses(prev => ({ ...prev, [questionId]: value }))
  }

  useEffect(() => {
    const newScores: Record<string, number> = {}
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
    })
    setScores(newScores)
  }, [responses])

  const getTotalScore = () => Object.values(scores).reduce((sum, score) => sum + score, 0)

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
          <RadioGroup onValueChange={(value) => handleResponse(question.id, value)}>
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
          <Select onValueChange={(value) => handleResponse(question.id, value)}>
            <SelectTrigger>
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
        return <Textarea onChange={(e) => handleResponse(question.id, e.target.value)} />
      default:
        return null
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Clinical Evaluation <boltAction type="file" filePath="src/economic-evaluation.tsx">'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { type EconomicSection, economicSections } from './evaluation-data'

interface EconomicQuestion {
  id: string
  text: string
  type: 'radio' | 'select' | 'text'
  options?: Array<{
    value: string
    label: string
    score: number
  }>
}

export function EconomicEvaluation() {
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [scores, setScores] = useState<Record<string, number>>({})

  const handleResponse = (questionId: string, value: string) => {
    setResponses(prev => ({ ...prev, [questionId]: value }))
  }

  useEffect(() => {
    const newScores: Record<string, number> = {}
    economicSections.forEach(section => {
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
    })
    setScores(newScores)
  }, [responses])

  const getTotalScore = () => Object.values(scores).reduce((sum, score) => sum + score, 0)

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100
    if (percentage <= 33) return 'bg-green-500'
    if (percentage <= 66) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const renderQuestion = (question: EconomicQuestion) => {
    switch (question.type) {
      case 'radio':
        return (
          <RadioGroup onValueChange={(value) => handleResponse(question.id, value)}>
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
          <Select onValueChange={(value) => handleResponse(question.id, value)}>
            <SelectTrigger>
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
        return <Textarea onChange={(e) => handleResponse(question.id, e.target.value)} />
      default:
        return null
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Economic Evaluation</h2>
      {economicSections.map(section => (
        <Card key={section.id} className="mb-6">
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {section.questions.map(question => (
              <div key={question.id} className="mb-4">
                <Label className="mb-2 block">{question.text}</Label>
                {renderQuestion(question)}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
      <Card>
        <CardHeader>
          <CardTitle>Results</CardTitle>
        </CardHeader>
        <CardContent>
          {economicSections.map(section => (
            <div key={section.id} className="flex justify-between items-center mb-2">
              <span>{section.title}</span>
              <span className={`px-2 py-1 rounded text-white ${getScoreColor(scores[section.id] || 0, section.maxScore)}`}>
                {scores[section.id] || 0} / {section.maxScore}
              </span>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4 font-bold">
            <span>Total Score</span>
            <span className={`px-2 py-1 rounded text-white ${getScoreColor(getTotalScore(), 39)}`}>
              {getTotalScore()} / 39
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}