import { ComponentProps } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

interface TextInputProps {
  prefix?: ComponentProps<typeof Prefix>["prefix"];
}

export function TextInput({prefix}: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input />
    </TextInputContainer>
  )
}