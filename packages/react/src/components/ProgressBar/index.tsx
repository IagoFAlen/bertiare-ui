import React from "react";
import { ProgressBarProps } from "./types";
import { ProgressBarContainer, ProgressBarOuter, ProgressBarInner, ProgressBarInfoWrapper, ProgressBarNumber, ProgressBarTitle, ProgressBarBox, ProgressBarCircle} from "../../styles/pages/progressbar";
import { getVariantCircleBasedOnProgress } from "./functions";

export function ProgressBar(props: ProgressBarProps) {
    const variant = getVariantCircleBasedOnProgress(props.progressNumber);

    const strokeDashoffset = -(440 * (100 - (-props.progressNumber))) / 100;

    return (
        <>
            <ProgressBarContainer>
                <ProgressBarOuter>
                    <ProgressBarInner>
                        <ProgressBarInfoWrapper>
                            <ProgressBarNumber>{props.progressNumber}{props.percentage && <span>%</span>}</ProgressBarNumber>
                            <ProgressBarTitle >{props.title}</ProgressBarTitle>
                        </ProgressBarInfoWrapper>
                    </ProgressBarInner>
                </ProgressBarOuter>
                <ProgressBarBox>
                    <ProgressBarCircle 
                        r={70} 
                        cx={70} 
                        cy={70} 
                        variant={variant}
                        css={{ strokeDashoffset }}
                    />
                </ProgressBarBox>
            </ProgressBarContainer>
        </>
    );
}
