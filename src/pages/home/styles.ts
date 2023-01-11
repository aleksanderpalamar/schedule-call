import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;  
  gap: ${(props) => props.theme.space[20]};
  margin-left: auto;
  height: 100vh;
  max-width: calc(100vw - (100vw - 1160px) / 2);  
`

export const Hero = styled.div`
  max-width: 400;
  padding: 0 ${(props) => props.theme.space[10]};
  
  h1 {
    font-size: ${(props) => props.theme.fontSizes["6xl"]};
  }
  p {
    margin-top: ${(props) => props.theme.space[2]};
    color: ${(props) => props.theme.colors.gray200};
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`

export const Preview = styled.div`
  padding: ${(props) => props.theme.space[8]};
  overflow: hidden;

  @media (max-width: 600px) {
    display: none;
  }
`