import { keyframes, styled } from '..'

const slideIn = keyframes({
    from: {
        transform: 'translateY(-100%)',
    },
    to: {
        transform: 'translateY(0)',
    },
})

const slideOut = keyframes({
    from: {
        transform: 'translateY(0)',
    },
    to: {
        transform: 'translateY(-100%)',
    },
})

export const CheckboxContainer = styled('input', {
    appearance: 'none',
    width: '$4',
    height: '$4',
    background: '$success',
    cursor: 'pointer',
    borderRadius: '$xs',
    position: 'relative',
    overflow: 'hidden',

    '&::before': {
        content: '',
        display: 'block',
        width: '$4',
        height: '$4',
        borderRadius: '$xs',
        background: '$backgroundInverse',
        transition: 'transform, background 0.2s ease-in-out',

    },

    '&:hover::before': {
        background: '$checkboxHover',
    },

    '&::after': {
        content: '',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '70%',
        height: '70%',
        transform: 'translate(-50%, -50%)',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5"/></svg>')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 0,
        transition: 'opacity 0.2s ease-in-out',
    },

    '&:checked::before': {
        animation: `${slideOut} 0.1s ease-in-out forwards`,
    },

    '&:checked::after': {
        opacity: 1,
    },
})
