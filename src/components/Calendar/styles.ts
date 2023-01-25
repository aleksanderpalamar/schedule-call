import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[6]};
  padding: ${(props) => props.theme.space[6]};
`

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CalendarTitle = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-transform: capitalize;

  span {
    color: ${(props) => props.theme.colors.gray200};
  }
`

export const CalendarActions = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.gray200};

  button {
    all: unset;
    cursor: pointer;
    line-height: 0;
    border-radius: 4px;
    transition: color 0.2s;

    svg {
      width: ${(props) => props.theme.space[5]};
      height: ${(props) => props.theme.space[5]};
    }

    &:hover {
      color: ${(props) => props.theme.colors.gray100};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.gray100};
    }
  }
`

export const CalendarBody = styled.table`
  width: 100%;
  font-family: ${(props) => props.theme.fontFamilies.body};
  border-spacing: ${(props) => props.theme.space[1]};
  table-layout: fixed;

  thead th {
    color: ${(props) => props.theme.colors.gray200};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  tbody:before {
    content: ".";
    line-height: 0.75rem;
    display: block;
    color: ${(props) => props.theme.colors.gray800};
  }

  tbody td {
    box-sizing: border-box;
  }
`

export const CalendarDay = styled.button`
  all: unset;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.gray600};
  text-align: center;
  cursor: pointer;

  &:disabled {
    background-color: none;
    cursor: default;
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.gray500};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.gray100};
  }
`

