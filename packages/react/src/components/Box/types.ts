import { ComponentProps } from "react"
import { BoxContainer } from "../../styles/pages/box";

export interface BoxProps extends ComponentProps<typeof BoxContainer> {
    fit?: string,
    padding?: string,
    variant?: 'large' | 'medium' | 'small',
}