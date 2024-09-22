import React from "react";
import { FaUser } from "react-icons/fa";
import { AvatarContainer, DefaultAvatar } from "../../styles/pages/avatar";
import { AvatarProps } from "./types";

export function Avatar(props: AvatarProps){
    return(
        <>
            { 
                props.src ? <AvatarContainer {...props} src={props.src} size={props.size} alt=""/> : (
                    <DefaultAvatar size={props.size}> 
                        <FaUser size={props.size}/> 
                    </DefaultAvatar>
                )
            }
        </>
    )
}