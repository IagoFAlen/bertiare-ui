import React from "react";
import { InputContainer } from "../../styles/pages/input";
import { InputProps } from "./types";

export function Input(props: InputProps) {
    return(
        <>
            <InputContainer {...props} css={{ '--fit': props.fit }}/>
        </>
    )
}