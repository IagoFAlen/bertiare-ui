import { styled } from '../../styles'
import { TextContainer } from './text'

export const MultiStepContainer = styled('div', {
    width: '100%',
})

export const Label = styled(TextContainer, {})

export const StepHighLight = styled('span', {
    color: '$text',
    fontWeight: '$bold',
})

export const Steps = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
    gap: '$2',
    marginTop: '$1',
})

export const Step = styled('div', {
    height: '$1',
    borderRadius: '$px',
    backgroundColor: '$muted',

    variants: {
        active: {
            true: {
                backgroundColor: '$success',
            },
        },
    },
})
