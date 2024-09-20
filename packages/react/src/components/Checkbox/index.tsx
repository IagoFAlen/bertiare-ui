import React from 'react'
import { CheckboxContainer } from '../../styles/pages/checkbox'
import { CheckboxProps } from './types'

export function Checkbox(props: CheckboxProps) {
  return (
    <>
        <CheckboxContainer type='checkbox' {...props} >
            
        </CheckboxContainer>
    </>
  )
}

