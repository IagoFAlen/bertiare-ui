import React, { forwardRef } from "react";
import { InputContainer } from "../../styles/pages/input";
import { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <InputContainer ref={ref} {...props} css={{ '--fit': props.fit }} />
    );
});

Input.displayName = 'Input';