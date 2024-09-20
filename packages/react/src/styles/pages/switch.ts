import { keyframes, styled } from "..";

export const SwitchContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',

    borderRadius: '$lg',
    boxShadow: 'rgba(50, 50, 93, 0.25) 1px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    cursor: 'pointer',
    transition: 'background 0.4s ease-out',
    variants: {
        size: {
            large: {
                width: '$16',
                height: '$7',
            },
            medium: {
                width: '$12',
                height: '$6'
            },
            small: {
                width: '$10',
                height: '$5',
            },
        },
        active: {
            true: {
                background: '$appBackgroundInverse',
            },
            false: {
                background: '$appBackground',
            },
        },
    }
})

export const SwitchBox = styled('svg', {
    borderRadius: '$lg',
    position: 'relative',
    overflow: 'visible',

    variants: {
        size: {
            large: {
                width: '$16',
                height: '$7',
            },
            medium: {
                width: '$12',
                height: '$5',
            },
            small: {
                width: '$10',
                height: '$5',
            },
        },
    }
})

const activeAnimation = keyframes({
    from: {
        transform: 'translateX(0)',
    },
    to: {
        transform: 'translateX(50%)'
    },
})

const deactiveAnimation = keyframes({
    from: {
        transform: 'translateX(50%)',
    },
    to: {
        transform: 'translateX(0)'
    },
})

export const SwitchCircle = styled('circle', {
    fill: '$background',
    position: 'absolute',

    variants: {
        size: {
            large: {
                r: '12',
                cx: '16',
                cy: '14',
            },
            medium: {
                r: '9',
                cx: '12',
                cy: '10',
            },
            small: {
                r: '8',
                cx: '10',
                cy: '10',
            },
        },
        active: {
            true: {
                animation: `${activeAnimation} 0.2s ease-in-out forwards`,
            },
            false: {
                animation: `${deactiveAnimation} 0.2s ease-in-out forwards`,
                background: '$appBackgroundInverse',
            },
        },
    },
})