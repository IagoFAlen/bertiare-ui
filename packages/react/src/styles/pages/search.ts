import { styled } from "..";

export const SearchContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    fontSize: '$sm',
    fontWeight: '$regular',
    borderRadius: '$lg',
    background: '$inputBackground',
    color: '$text',
    padding: '$2 $4',
    boxShadow: 'rgba(50, 50, 93, 0.25) 1.5px 2.5px 5.5px -0.5px, rgba(0, 0, 0, 0.3) 0.5px 1.5px 3.5px -0.5px'
})

export const SearchBox = styled('input', {
    all: 'unset',
    marginRight: '$1',
})

export const IconContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '$2', 
    color: '$mutedIcon',
})