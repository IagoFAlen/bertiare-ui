import React from "react";
import { HeadingProps } from "./types";
import { HeadingContainer } from "../../styles/pages/heading";

export function Heading(props: HeadingProps) {
    return(
        <>
            <HeadingContainer {...props}>{props.children}</HeadingContainer>
        </>
    )
}