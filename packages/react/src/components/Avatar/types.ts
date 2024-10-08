import { ComponentProps } from "react";
import { AvatarContainer } from "../../styles/pages/avatar";

export interface AvatarProps extends ComponentProps<typeof AvatarContainer> {
    src?: string,
    alt?: string, 
    size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall'
}