import React from "react";
import { SearchBox, SearchContainer, IconContainer } from "../../styles/pages/search";
import { SearchProps } from "./types";
import { FaSearch } from "react-icons/fa";

export function Search(props: SearchProps) {
    return(
        <>
            <SearchContainer {...props}>
                <SearchBox placeholder={props.placeholder}/>
                <IconContainer>
                    <FaSearch />
                </IconContainer>
            </SearchContainer>
        </>
    )
}