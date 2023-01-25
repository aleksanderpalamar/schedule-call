import { Box, styled, TextArea, TextInput } from "@ignite-ui/react";
import css from "styled-jsx/css";

export const ConfirmForm = styled(Box, {
  maxWidth: 540,
  display: "flex",
  flexDirection: "column",
  margin: "$6 auto 0",
  gap: "$4",
  border: "none",

  label: {
    display: "flex",
    flexDirection: "column",
    gap: "$2",

    p: {
      fontSize: "$sm",
    },

    [`${TextArea}`]: {
      width: "100%",
      padding: "$2",
      border: "2px solid transparent",
      resize: "none",
      "&:focus": {
        borderColor: "#8257e6",
      },
    },
  },
});

export const FormHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",
  borderBottom: "1px solid $gray600",
  paddingBottom: "$6",
  marginBottom: "$2",

  p: {
    display: "flex",
    alignItems: "center",
    gap: "$2",

    svg: {
      color: "$gray200",
      width: "$5",
      height: "$5",
    },
  },
});

export const FormError = styled("p", {
  color: "#f75a68",
  fontSize: "$sm",
});

export const FormActions = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  gap: "$2",
  marginTop: "$2",
});