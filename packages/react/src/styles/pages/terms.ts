import { keyframes, styled } from "..";

export const TermsContainer = styled('p', {
    fontSize: '$xs',
    lineHeight: '$shorter',
    color: '$text',
})

export const HighlightText = styled('span', {
    fontSize: '$xs',
    fontWeight: '$bold',
    color: '$text',
    cursor: 'pointer',
    
    position: 'relative',

    '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: '-2px',
        width: '100%',
        height: '1px',
        backgroundColor: '$text',
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transition: 'transform 0.2s ease-in-out',
    },

    '&:hover::after': {
        transform: 'scaleX(1)',
        transformOrigin: 'left',
    },
})