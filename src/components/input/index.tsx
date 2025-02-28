import React from "react";
import { ErrorText, IconContainer, InputContainer, InputText } from "./styles";
import { IInput } from "./types";
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, erroMessage, ...rest }: IInput) => {
    return (
        <>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) =>
                        <InputText value={value} onChange={onChange} {...rest} />}
                />
            </InputContainer>
            {erroMessage ? <ErrorText>{erroMessage}</ErrorText> : null}
        </>
    )
}

export { Input }