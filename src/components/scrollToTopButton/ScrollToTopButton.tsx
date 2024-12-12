import { useScrollPosition } from "@utils";
import * as Styles from "./ScrollToTopButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const ScrollToTopButton = () => {
  const { hasScrollMoved } = useScrollPosition();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!hasScrollMoved) return null;

  return (
    <Styles.ScrollToTopButton onClick={handleScrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </Styles.ScrollToTopButton>
  );
};
