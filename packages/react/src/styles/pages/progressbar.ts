import { keyframes, styled } from "..";

export const ProgressBarContainer = styled('div', {
    width: '$40',
    height: '$40',
    position: 'relative',
})

export const ProgressBarOuter = styled('div', {
    width: '$40',
    height: '$40',
    borderRadius: '$full',
    border: '20px solid $appBackground',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '6px 6px 10px -1px rgba(0, 0, 0, 0.2)'
})

export const ProgressBarInner = styled('div', {
    width: '$30',
    height: '$30',
    borderRadius: '$full',

    boxShadow: 'inset 4px 4px 6px -1px rgba(0,0,0,0.2), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const ProgressBarInfoWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',

})

export const ProgressBarNumber = styled('span', {
    fontSize: '$4xl',
    fontWeight: '$regular',
    color: '$text',

})

export const ProgressBarTitle = styled('span', {
    fontWeight: '$bold',
    fontSize: '$xs',
    color: '$text',
})

export const ProgressBarBox = styled('svg', {
    width: '$40',
    height: '$40',
    transform: 'rotate(-90deg)',
    position: 'absolute',
    top: 0,
    left: 0,
})

export const ProgressBarCircle = styled('circle', {
    fill: 'none',
    stroke: '$black',
    strokeWidth: 12,
    strokeLinecap: 'round',
    strokeDasharray: 440,
    transform: 'translate(10px, 10px)',
    transition: 'stroke-dashoffset 0.8s ease-in-out',

    variants: {
        variant: {
            high: {
                stroke: '$success',
            },
            medium: {
                stroke: '$warning',
            },
            low: {
                stroke: '$danger',
            }
        }
    },
})