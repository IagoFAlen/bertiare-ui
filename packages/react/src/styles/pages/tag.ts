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

            },
            warning: {
                background: '$warningSale',
                color: '$warningSaleHighlight',
                borderColor: '$warningSaleHighlight',
            },
            danger: {
                background: '$dangerSale',
                color: '$dangerSaleHighlight',
                borderColor: '$dangerSaleHighlight',
            }
        },
        size: {
            small: {
                padding: '$1 $4',
                fontSize: '$sm',
            }
        },
        weight: {
            bold: {
                fontWeight: '$bold',
            }
        }
    }

})

export const TagTitle = styled('span', {})