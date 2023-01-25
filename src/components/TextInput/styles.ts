import styled from "styled-components";

export const TextInputContainer = styled.div`
  background-color: ${(props) => props.theme.colors.gray900};
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};
  border-radius: ${(props) => props.theme.radii.md};
  display: flex;
  align-items: center;
  border: 2px solid transparent;

  &:has(input:focus) {
    border: 2px solid ${(props) => props.theme.colors.purple300};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Prefix = styled.span`
  color: ${(props) => props.theme.colors.gray400};
  font-family: ${(props) => props.theme.fontFamilies.body};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`

export const Input = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray100};
  font-family: ${(props) => props.theme.fontFamilies.body};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  border: none;
  width: 100%;  

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray400};
  }

  &:disabled {
    cursor: not-allowed;
  }
`