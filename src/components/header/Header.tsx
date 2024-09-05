import { AppContainer, MenuButton } from "@components";
import * as Styles from "./Header.styles";
import { type MouseEvent, useEffect, useState } from "react";
import { useScrollPosition } from "@utils";
import { HOME_ID, HOME_SECTION, menuItems } from "@constants";

export const Header = () => {
  const { hasScrollMoved } = useScrollPosition();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [ideal, shape] = HOME_SECTION.split(" ");

  const handleMenuClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    const moveScroll = () => element?.scrollIntoView({ behavior: "smooth" });

    if (!isMenuActive) {
      moveScroll();
      return;
    }

    setIsMenuActive(false);
    setTimeout(moveScroll, 200);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isMenuActive && window.innerWidth > 768) {
        setIsMenuActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuActive]);

  return (
    <Styles.Header $hasScrollMoved={hasScrollMoved}>
      <AppContainer isHeader className="app-container">
        <Styles.Logo href={`#${HOME_ID}`}>
          {ideal} <span>{shape}</span>
        </Styles.Logo>
        <Styles.Nav $isMenuActive={isMenuActive}>
          {menuItems.map(({ title, id }) => (
            <Styles.NavLink
              key={id}
              href={`#${id}`}
              onClick={(e) => handleMenuClick(e, id)}
            >
              {title}
            </Styles.NavLink>
          ))}
        </Styles.Nav>
        <MenuButton
          className="menu-button"
          isActive={isMenuActive}
          onClick={() => setIsMenuActive(!isMenuActive)}
        />
      </AppContainer>
    </Styles.Header>
  );
};
