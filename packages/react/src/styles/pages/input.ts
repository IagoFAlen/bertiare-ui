import { styled } from "..";

export const InputContainer = styled('input', {
    borderRadius: '$sm',
    background: '$inputBackground',
    width: 'var(--fit)',
    color: '$text',
    padding: '$4 $4',
    boxShadow: 'rgba(50, 50, 93, 0.25) 1.5px 2.5px 5.5px -0.5px, rgba(0, 0, 0, 0.3) 0.5px 1.5px 3.5px -0.5px',
    fontSize: '$xs',
    fontWeight: '$regular',
    border: '1.2px solid $background',

    '&:focus': {
        borderColor: '$backgroundInverse',
    },

    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },

    '&:placeholder': {
        color: '$muted',
    },

    variants: {
        color: {
            success: {
                borderColor: '$success',
            },
            warning: {
                borderColor: '$warning',
            },
            danger: {
                borderColor: '$danger',
            }
        },
        weight: {
            bold: {
                fontWeight: '$bold',
            }
        }
    }
})