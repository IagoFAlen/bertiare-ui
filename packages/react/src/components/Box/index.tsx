import React from "react";
import { BoxProps } from "./types"
import { BoxContainer } from "../../styles/pages/box";

export function Box(props: BoxProps) {

    return(
        <>
            <BoxContainer {...props} css={{ '--fit': props.fit }}>{props.children}</BoxContainer>        
        </>
    )
}