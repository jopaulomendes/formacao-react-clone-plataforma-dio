import React from "react";
import { IconContainer, InputContainer } from "./styles";

const Input = ({leftIcon, name, ...rest}) => {
    return (
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <Input {...rest} />
        </InputContainer>
    )
}

export {Input}