import styled from "styled-components";

export const Container = styled.div`
  margin-top: ${(props) => props.theme.space[6]};
  padding: 0;
  display: grid;
  max-width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.colors.gray800};
  border-radius: 6px;

  width: 540px;
  grid-template-columns: 1fr;
`