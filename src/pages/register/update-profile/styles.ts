import styled from "styled-components";

export const ProfileBox = styled.div`
  margin-top: ${(props) => props.theme.space[4]};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.gray800};
  padding: ${(props) => props.theme.space[4]};
  border-radius: 6px;
  gap: ${(props) => props.theme.space[4]};

  label {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.space[4]};
  }
`;

export const FormAnnotation = styled.p`
  color: ${(props) => props.theme.colors.gray200};
  font-size: ${(props) => props.theme.fontSizes.sm};
`
