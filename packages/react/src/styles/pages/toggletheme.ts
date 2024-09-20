import { styled } from "..";

export const ToggleThemeContainer = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1.2px solid $elementInteractionBackgroundInverse',
    fontSize: '$md',
    color: '$text',
    background: '$elementInteractionBackground',
    borderRadius: '$md',

    cursor: 'pointer',
    padding: '$3 $4',
    boxShadow: 'rgba(50, 50, 93, 0.25) 2px 3px 6px -1px, rgba(0, 0, 0, 0.3) 1px 2px 4px -1px',
    transition: 'background, color 0.1s ease-in-out',
    
    '&:hover': {
        color: '$textInverse',
        background: '$elementInteractionBackgroundInverse',
        borderWidth: '1.2px', 
    }
})