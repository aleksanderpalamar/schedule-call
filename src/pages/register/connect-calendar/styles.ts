import styled from "styled-components";


export const ConnectBox = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.space[6]};
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.gray800};
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.space[4]};
`

export const ConnectItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border: 1px solid ${(props) => props.theme.colors.gray600};
  padding: ${(props) => props.theme.space[4]} ${(props) => props.theme.space[6]};
  border-radius: ${(props) => props.theme.radii.md};

  margin-bottom: ${(props) => props.theme.space[2]};
`

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

export const AuthError = styled.span`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes.xs}; 
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: ${(props) => props.theme.space[4]};
  word-wrap: break-word;
  svg {
    background-color: ${(props) => props.theme.colors.warning};
    opacity: 0.8;
    color: ${(props) => props.theme.colors.gray900};
    border-radius: 4px;
    padding: ${(props) => props.theme.space[1]};
  }
`