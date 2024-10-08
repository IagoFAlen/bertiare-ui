import { FaWeight } from "react-icons/fa";
import { styled } from "..";

export const TextContainer = styled('p', {
    fontSize: '$sm',
    lineHeight: '$short',
    color: '$text',

    variants: {
        size: {
            large: {
                fontSize: '$2xl',
            },
            medium: {
                fontSize: '$md',
            },
            small: {
                fontSize: '$sm',
            },
            xsmall: {
                fontSize: '$xs',
            }
        },
        weight: {
            bold: {
                fontWeight: '$bold',
            }
        },
        color: {
            success: {
                color: '$success',
            },
            warning: {
                color: '$warning',
            },
            danger: {
                color: '$danger',
            }
        }
    }
})