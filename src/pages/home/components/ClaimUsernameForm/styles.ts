import { Box } from "@palamar-ui/react";
import styled from "styled-components";

export const Form = styled(Box)`
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