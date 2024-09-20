import React from "react";
import { ToggleThemeContainer } from "../../styles/pages/toggletheme";
import { ToggleThemeProps } from "./types";

export function ToggleTheme(props: ToggleThemeProps){
    return(
        <>
            <ToggleThemeContainer {...props}>
                {props.children}
            </ToggleThemeContainer>
        </>
    )
}