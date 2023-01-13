import { Input, Prefix, TextInputContainer } from "./styles";

interface TextInputProps {
  prefix?: string;
}

export function TextInput({prefix}: TextInputProps) {
  return (
    <TextInputContainer>
      {prefix && <Prefix>{prefix}</Prefix>}
      <Input />
    </TextInputContainer>
  )
}