import React from "react";
import { Social, SocialsContainer } from "../../styles/pages/socials";
import { SocialsProps } from "./types";
import { 
    FaLinkedin,
    FaSpotify,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaReddit
} from "react-icons/fa";

export function Socials(props: SocialsProps){
    
    return(
        <>
            <SocialsContainer {...props}>
                {
                    props.linkedinlink && (
                        <Social href={props.linkedinlink} target="_blank">
                            <FaLinkedin size={props.size} />
                        </Social>
                    )
                }

                {
                    props.spotifylink && (
                        <Social href={props.spotifylink} target="_blank">
                            <FaSpotify size={props.size} />
                        </Social>
                    )
                }

                {
                    props.githublink && (
                        <Social href={props.githublink} target="_blank">
                            <FaGithub size={props.size} />
                        </Social>

                    )
                }

                {
                    props.instagramlink && (
                        <Social href={props.instagramlink} target="_blank">
                            <FaInstagram size={props.size} />
                        </Social>

                    )
                }

                {
                    props.twitterlink && (
                        <Social href={props.twitterlink} target="_blank">
                            <FaTwitter size={props.size} />
                        </Social>

                    )
                }

                {
                    props.facebooklink && (
                        <Social href={props.facebooklink} target="_blank">
                            <FaFacebook size={props.size}/>
                        </Social>

                    )
                }

                {
                    props.redditlink && (
                        <Social href={props.redditlink} target="_blank">
                            <FaReddit size={props.size}/>
                        </Social>

                    )
                }
            </SocialsContainer>
        </>
    )
}