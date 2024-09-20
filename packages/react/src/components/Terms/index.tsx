import React from "react"
import { TermsProps } from "./types"
import { TermsContainer, HighlightText } from "../../styles/pages/terms"

export function Terms(props: TermsProps) {
    return(
        <>
            <TermsContainer {...props}>Aceito os <HighlightText>Termos de Uso</HighlightText> da plataforma</TermsContainer>
        </>
    )
}