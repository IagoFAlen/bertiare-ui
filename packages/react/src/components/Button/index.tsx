import React from "react"
import { ButtonProps } from "./types"
import { ButtonContainer } from "../../styles/pages/button"

export function Button(props: ButtonProps) {
    return(
        <>
            <ButtonContainer {...props}>{props.children}</ButtonContainer>
        </>
    )
}