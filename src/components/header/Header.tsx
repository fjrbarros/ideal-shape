import { AppContainer, MenuButton } from "@components";
import * as Styles from "./Header.styles";
import { useEffect, useState } from "react";
import { useScrollPosition } from "@utils";

export const Header = () => {
  const { hasScrollMoved } = useScrollPosition();
  const [isMenuActive, setIsMenuActive] = useState(false);

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
      <AppContainer className="app-container">
        <Styles.Logo>
          IDEAL<span>SHAPE</span>
        </Styles.Logo>
        <Styles.Nav $isMenuActive={isMenuActive}>
          <Styles.NavLink href="#service">Nossos serviços</Styles.NavLink>
          <Styles.NavLink href="#membership">Planos</Styles.NavLink>
          <Styles.NavLink href="#trainers">Instrutores</Styles.NavLink>
          <Styles.NavLink href="#contact">Contato</Styles.NavLink>
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
