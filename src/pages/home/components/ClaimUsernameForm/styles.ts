import { Box } from "@palamar-ui/react";
import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[4]};
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.gray800};  
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const FormAnnotation = styled.div`
  margin-top: ${(props) => props.theme.space[2]};

  span {
    color: ${(props) => props.theme.colors.gray400};
  }
`

export const TextInput = styled.input`
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.radii.md};
  border: 1px solid ${(props) => props.theme.colors.purple300};
  background-color: ${(props) => props.theme.colors.gray900};
  color: ${(props) => props.theme.colors.gray100};

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.purple300};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray400};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`