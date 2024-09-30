import { styled } from "..";

export const HeadingContainer = styled('h2', {
    fontSize: '$4xl',
    lineHeight: '$base',
    color: '$text',

    variants: {
        size: {
            large: {
                fontSize: '$6xl',
            },
            medium: {
                fontSize: '$4xl',
            },
            small: {
                fontSize: '$2xl',
            },
            xsmall: {
                fontSize: '$lg',
            },
            xxsmall: {
                fontSize: '$md',
            },
            minimum: {
                fontSize: '$sm',
            }
        },
        
        decoration: {
            highlight: {
                lineHeight: '$shorter',
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
            }
        }
    }
})