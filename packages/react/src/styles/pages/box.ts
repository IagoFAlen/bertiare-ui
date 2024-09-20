import { styled } from "..";

export const BoxContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: 'var(--fit)',
    background: '$background',
    borderRadius: '$md',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    padding: '$8',
    gap: '$4',
    transition: 'all 0.5s ease-in-out',
    
    '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;',
        backgroundColor: '$hoverDepth',
    },

    variants: {
        variant: {
            large: {
                padding: '$12',
            },
            medium: {
                padding: '$6',
            },
            small: {
                padding: '$3',
            },
        }
    }
})
