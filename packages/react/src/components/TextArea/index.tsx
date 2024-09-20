import React from "react";
import { TextAreaContainer } from "../../styles/pages/textarea";
import { TextAreaProps } from "./types";

export function TextArea(props: TextAreaProps){
    return(
        <>
            <TextAreaContainer {...props} />
        </>
    )
}