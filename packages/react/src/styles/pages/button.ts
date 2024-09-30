import { styled } from "..";

export const ButtonContainer = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    fontSize: '$md',
    borderRadius: '$sm',

    cursor: 'pointer',
    width: 'var(--fit)',
    padding: '$3 $7',
    boxShadow: 'rgba(50, 50, 93, 0.25) 1.5px 2.5px 5.5px -0.5px, rgba(0, 0, 0, 0.3) 0.5px 1.5px 3.5px -0.5px',
    transition: 'background 0.3s ease-in-out, color 0.1s ease-in-out',

    '&:hover': {
        borderWidth: '1.2px', 
    },

    '&:disabled': {
        border: '$elementInteractionBackground',
        cursor: 'not-allowed',
    },

    variants: {
        variant: {
            default: {
                border: '1.2px solid $elementInteractionBackgroundInverse',
                color: '$textInverse',
                background: '$elementInteractionBackgroundInverse',
               
                '&:hover': {
                    color: '$text',
                    background: '$elementInteractionBackground',
                },

                '&:disabled': {
                    color: '$mutedInverse',
                    background: '$elementInteractionBackgroundInverse',
                    
                    '&:hover': {
                        color: '$mutedInverse',
                        background: '$elementInteractionBackgroundInverse',
                    }
                },
            },
            inverse: {
                border: '1.2px solid $elementInteractionBackgroundInverse',
                color: '$text',
                background: '$elementInteractionBackground',

                '&:hover': {
                    color: '$textInverse',
                    background: '$elementInteractionBackgroundInverse',
                },

                '&:disabled': {
                    color: '$muted',
                    background: '$elementInteractionBackground',
                    
                    '&:hover': {
                        color: '$muted',
                        background: '$elementInteractionBackground',
                    }
                },
            },
            danger: {
                border: '1.2px solid $danger',
                color: '$textInverse',
                background: '$danger',
               
                '&:hover': {
                    color: '$danger',
                    background: '$elementInteractionBackground',
                },

                '&:disabled': {
                    color: '$mutedInverse',
                    background: '$mutedInverse',
                    
                    '&:hover': {
                        color: '$mutedInverse',
                        background: '$mutedInverse',
                    }
                },
            }
        }
    }

})
