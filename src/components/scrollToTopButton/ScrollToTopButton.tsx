import { useScrollPosition } from "@utils";
import * as Styles from "./ScrollToTopButton.styles";

export const ScrollToTopButton = () => {
  const { hasScrollMoved } = useScrollPosition();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!hasScrollMoved) return null;

  return (
    <Styles.ScrollToTopButton onClick={handleScrollToTop}>
      <Styles.Icon>^</Styles.Icon>
    </Styles.ScrollToTopButton>
  );
};
