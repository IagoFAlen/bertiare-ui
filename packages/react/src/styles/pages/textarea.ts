import { styled } from '..'

export const TextAreaContainer = styled('textarea', {
  backgroundColor: '$inputBackground',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $inputBackground',

  fontSize: '$xs',
  fontWeight: '$regular',

  color: '$text',
  resize: 'vertical',
  minHeight: 100,
  maxHeight: 240,
  boxShadow: 'rgba(50, 50, 93, 0.25) 1.5px 2.5px 5.5px -0.5px, rgba(0, 0, 0, 0.3) 0.5px 1.5px 3.5px -0.5px',

  '&:focus': {
    outline: 0,
    borderColor: '$backgroundInverse',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$muted',
  },

  '&::-webkit-scrollbar': {
    backgroundColor: 'transparent',
    width: '$1',
    padding: '$1 $1'
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$backgroundInverse',
    borderRadius: '$lg',
  }
    
})

