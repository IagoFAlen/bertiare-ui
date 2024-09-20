
import { ComponentProps } from "react";
import { HeadingContainer } from "../../styles/pages/heading";

export interface HeadingProps extends ComponentProps<typeof HeadingContainer>{
    size?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall'
}