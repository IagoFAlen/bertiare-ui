import React from "react";
import { SwitchProps } from "./types";
import { SwitchBox, SwitchCircle, SwitchContainer } from "../../styles/pages/switch";

export function Switch(props: SwitchProps) {

    return(
        <>
            <SwitchContainer {...props} size={props.size} active={props.active}>
                <SwitchBox size={props.size} >
                    <SwitchCircle size={props.size} active={props.active}/>
                </SwitchBox>
            </SwitchContainer>
        </>
    )
}