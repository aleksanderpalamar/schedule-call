import styled from "styled-components";

export const Container = styled.main`
  max-width: 572px;
  margin: ${(props) => props.theme.space[20]} auto
    ${(props) => props.theme.space[4]};
  padding: 0 ${(props) => props.theme.space[4]};
`;

export const Header = styled.div`
  padding: 0 ${(props) => props.theme.space[6]};

  strong {
    line-height: ${(props) => props.theme.lineHeights.base};
    font-size: ${(props) => props.theme.fontSizes["2xl"]};
  }

  p {
    color: ${(props) => props.theme.colors.gray200};
    margin-bottom: ${(props) => props.theme.space[6]};
  }
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.gray800};
  border-radius: ${(props) => props.theme.radii.md};
  margin-top: ${(props) => props.theme.space[6]};
  padding: ${(props) => props.theme.space[6]};
  gap: ${(props) => props.theme.space[4]};
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.space[2]};
  }
`;

export const FormError = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;