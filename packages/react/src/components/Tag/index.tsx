import React from "react";
import { TagProps } from "./types";
import { TagContainer, TagTitle } from "../../styles/pages/tag";

export function Tag(props: TagProps){
    return(
        <>
            <TagContainer {...props}>
                <TagTitle>{props.title}</TagTitle>
            </TagContainer>
        </>
    )
}