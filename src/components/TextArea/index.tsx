import { ComponentProps } from "react";
import { TextareaContainer } from "./styles";

interface TextAreaProps extends ComponentProps<typeof TextareaContainer> {}

export function TextArea(props: TextAreaProps) {
  return (
    <TextareaContainer {...props} />
  )
}