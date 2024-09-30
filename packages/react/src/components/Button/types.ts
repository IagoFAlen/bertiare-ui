import { ComponentProps } from "react";
import { ButtonContainer } from "../../styles/pages/button";

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
    children?: React.ReactNode,
    variant?: "default" | "inverse" | "danger",
    fit?: string,
}