import styled from "styled-components";

export const Container = styled.div`
  max-width: 852px;
  padding: 0 ${props => props.theme.space[4]};
  margin: ${props => props.theme.space[20]} auto ${props => props.theme.space[4]};
`

export const UserHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    line-height: ${props => props.theme.lineHeights.base};
    font-size: ${props => props.theme.fontSizes["2xl"]};
    font-weight: ${props => props.theme.fontWeights.bold};
    margin-bottom: ${props => props.theme.space[2]};
  }

  p {
    color: ${props => props.theme.colors.gray200};
    font-size: ${props => props.theme.fontSizes.sm};
  }
`