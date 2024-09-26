import { styled } from "..";

export const AvatarContainer = styled('img', {
    width: '$12',
    height: '$12',
    borderRadius: '$full',
    cursor: 'pointer',

    variants: {
        size: {
            xlarge: {
                width: '$20',
                height: '$20',
            },

            large: {
                width: '$16',
                height: '$16'
            },
            medium: {
                width: '$12',
                height: '$12'
            },
            small: {
                width: '$10',
                height: '$10'
            },
            xsmall: {
                width: '$8',
                height: '$8'
            },
            xxsmall: {
                width: '$6',
                height: '$6'
            }
        }
    }
})

export const DefaultAvatar = styled('div', {
    width: '$12',
    height: '$12',
    borderRadius: '$full',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    variants: {
        size: {
            xlarge: {
                width: '$20',
                height: '$20',
            },

            large: {
                width: '$16',
                height: '$16'
            },
            medium: {
                width: '$12',
                height: '$12'
            },
            small: {
                width: '$10',
                height: '$10'
            },
            xsmall: {
                width: '$8',
                height: '$8'
            },
            xxsmall: {
                width: '$6',
                height: '$6'
            }
        }
    }
})