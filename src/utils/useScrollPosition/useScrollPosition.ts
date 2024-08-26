import { useState, useEffect } from "react";

export const useScrollPosition = (value = 50) => {
  const [hasScrollMoved, setHasScrollMoved] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrollMoved(window.scrollY > value);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [value]);

  return { hasScrollMoved };
};
