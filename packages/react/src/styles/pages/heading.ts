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
            }
        }
    }
})