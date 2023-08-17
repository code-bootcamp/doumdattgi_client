import { useState } from "react";

export const useNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return {
    isOpen,
    setIsOpen
  };
};
