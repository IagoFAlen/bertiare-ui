import { ComponentProps } from "react"
import { TextContainer } from "../../styles/pages/text"

export interface TextProps extends ComponentProps<typeof TextContainer> {
    size?: 'large' | 'medium' | 'small' | 'xsmall',
    weight?: 'bold'
}