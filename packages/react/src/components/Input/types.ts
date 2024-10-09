import { ComponentProps } from "react";
import { InputContainer } from "../../styles/pages/input";

export interface InputProps extends ComponentProps<typeof InputContainer> {
    fit?: string,
    placeholder?: string,
    color?: 'success' | 'warning' | 'danger',
}