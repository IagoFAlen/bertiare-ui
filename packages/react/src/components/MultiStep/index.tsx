import React from 'react'
import { Label, MultiStepContainer, Step, StepHighLight, Steps } from '../../styles/pages/multistep'
import { MultiStepProps } from './types'

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <>
      <MultiStepContainer>
        <Label>
          Passo <StepHighLight>{currentStep}</StepHighLight> de <StepHighLight>{size}</StepHighLight>
        </Label>

        <Steps css={{ '--steps-size': size }}>
          {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
            return <Step key={step} active={currentStep >= step} />
          })}
        </Steps>
      </MultiStepContainer>
    </>
  )
}