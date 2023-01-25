import { ComponentProps } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

interface TextInputProps extends ComponentProps<typeof TextInputContainer> {
  prefix?: ComponentProps<typeof Prefix>["prefix"];
}

export function TextInput({prefix, props}: TextInputProps) {
  return (
    <TextInputContainer {...props}>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input />
    </TextInputContainer>
  )
}