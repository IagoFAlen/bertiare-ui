import React from "react"
import { TextProps } from "./types"
import { TextContainer } from "../../styles/pages/text"

export function Text(props: TextProps) {
    return(
        <>
            <TextContainer {...props}>{props.children}</TextContainer>
        </>
    )
}