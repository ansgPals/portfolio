import { useEffect, useState } from "react";

export const useScrollFadeIn = (
  ref: React.RefObject<HTMLElement | null>,
  offset = 0.9
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref) return;
      if (!ref.current) return;
      const { top } = ref.current.getBoundingClientRect();
      const inView = top < window.innerHeight * offset;
      if (inView) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, offset]);

  return isVisible;
};
