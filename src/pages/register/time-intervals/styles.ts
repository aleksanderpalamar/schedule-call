import styled from "styled-components";

export const IntervalBox = styled.form`
  margin-top: ${(props) => props.theme.space[6]};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.gray800};
  border-radius: 6px;
  padding: ${(props) => props.theme.space[4]};
  word-wrap: break-word;  
  flex-wrap: wrap;
  overflow-wrap: break-word;

  @media (min-width: 280px) {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.space[4]};    
    width: 100%;  
  }
`

export const IntervalContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.gray600};
  border-radius: 6px;
  margin-bottom: ${(props) => props.theme.space[4]};

  @media (min-width: 280px) {
    width: 100%;
  }
`

export const IntervalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};

  & + & {
    border-top: 2px solid ${(props) => props.theme.colors.gray500};
  }
`

export const IntervalDay = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[3]};
`

export const IntervalInputs = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[2]};

  input::-webkit-calendar-picker-indicator {
    filter: invert(100%) brightness(30%);
  }
`

export const FormError = styled.p`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes.sm}; 
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