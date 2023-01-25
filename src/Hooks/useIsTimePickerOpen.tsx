import { useState } from "react";

type initialStateProps = boolean;

export const useIsTimePickerOpen = (initialState: initialStateProps) => {
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(initialState);
  return [isTimePickerOpen, setIsTimePickerOpen];
}
