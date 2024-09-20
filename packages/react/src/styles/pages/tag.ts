import { styled } from "..";

export const TagContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '$2 $4',

    borderRadius: '$sm',
    background: '$backgroundInverse',
    border: '1.2px solid $backgroundInverse',

    color: '$textInverse',

    variants: {
        variant: {
            success: {
                background: '$successSale',
                color: '$successSaleHighlight',
                borderColor: '$successSaleHighlight',

                padding: '$1 $4',
                fontSize: '$sm',

            },
            warning: {
                background: '$warningSale',
                color: '$warningSaleHighlight',
                borderColor: '$warningSaleHighlight',

                padding: '$1 $4',
                fontSize: '$sm',
            },
            danger: {
                background: '$dangerSale',
                color: '$dangerSaleHighlight',
                borderColor: '$dangerSaleHighlight',
                
                padding: '$1 $4',
                fontSize: '$sm',
            }
        }
    }

})

export const TagTitle = styled('span', {})