import { ComponentProps } from "react";
import { SearchContainer } from "../../styles/pages/search";

export interface SearchProps extends ComponentProps<typeof SearchContainer> {
    placeholder?: string,
}