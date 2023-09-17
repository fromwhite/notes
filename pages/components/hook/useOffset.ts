import React from "react";

export const useOffset = (offset: number) => {
  const [reached, setReached] = React.useState(false);
  React.useEffect(() => {
    const reaching = () => setReached(window.scrollY > offset);
    window.addEventListener("scroll", reaching);
    return () => {
      window.removeEventListener("scroll", reaching);
    };
  }, [offset]);

  return reached;
};
