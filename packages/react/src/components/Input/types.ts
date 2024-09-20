import { ComponentProps } from "react";
import { InputContainer } from "../../styles/pages/input";

export interface InputProps extends ComponentProps<typeof InputContainer> {
    placeholder?: string,
}