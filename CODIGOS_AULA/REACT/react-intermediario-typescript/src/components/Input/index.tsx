import React from "react";
import { IconContainer, InputContainer, InputText } from "./styles";
import { IInput } from "./types";

const Input = ({leftIcon, name, ...rest}: IInput) => {
    return (
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText {...rest} />
        </InputContainer>
    )
}

export { Input };