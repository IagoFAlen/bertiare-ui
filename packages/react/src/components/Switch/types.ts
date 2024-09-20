import { ComponentProps } from "react";
import { SwitchContainer } from "../../styles/pages/switch";

export interface SwitchProps extends ComponentProps<typeof SwitchContainer> {
    size: 'large' | 'medium' | 'small',
    active: boolean,
}