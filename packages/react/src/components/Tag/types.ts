import { ComponentProps } from "react";
import { TagContainer } from "../../styles/pages/tag";

export interface TagProps extends ComponentProps<typeof TagContainer> {
    title: string,
    variant?: 'success' | 'warning' | 'danger',
    size?: 'small',
    weight?: 'bold',
}