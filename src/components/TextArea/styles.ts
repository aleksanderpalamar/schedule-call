import styled from "styled-components";

export const TextareaContainer = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid ${(props) => props.theme.colors.purple300};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.gray900};
  resize: none;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.gray100};
  padding: ${(props) => props.theme.space[2]};

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.purple300};
  }
`