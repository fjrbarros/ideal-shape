import styled, { css } from "styled-components";

interface IHeaderStyleProps {
  $isMenuActive?: boolean;
  $hasScrollMoved?: boolean;
}

export const Header = styled.header<IHeaderStyleProps>`
  backdrop-filter: ${({ $hasScrollMoved }) =>
    $hasScrollMoved ? "blur(8px)" : "blur(2px)"};
  border-bottom: ${({ $hasScrollMoved }) =>
    $hasScrollMoved ? "none" : "1px solid #2f2f2f"};
  color: #ffffff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: box-shadow 0.3s, backdrop-filter 0.3s;
  box-shadow: ${({ $hasScrollMoved }) =>
    $hasScrollMoved ? "0 0px 9px #ff380096;" : "none"};

  & > .app-container {
    display: flex;
    align-items: center;
    width: 100%;
  }
  & > .app-container .menu-button {
    margin-left: auto;
    display: none;
  }

  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.tablet}px) {
        justify-content: space-between;
        & > .app-container .menu-button {
          display: flex;
        }
      }
    `}
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  span {
    color: #ff4b00;
  }
`;

export const Nav = styled.nav<IHeaderStyleProps>`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  ${({ theme }) =>
    css<IHeaderStyleProps>`
      @media (max-width: ${theme.breakpoints.tablet}px) {
        position: fixed;
        top: 0;
        left: ${({ $isMenuActive }) => ($isMenuActive ? "0" : "100%")};
        height: 100dvh;
        width: 100%;
        padding: 100px 50px;
        gap: 2rem;
        background-color: #101010;
        flex-direction: column;
        transition: 0.3s ease-out;
      }
    `}
`;

export const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s, transform 0.1s;
  &:hover {
    color: #ff4b00;
    transform: scale(1.1);
  }
  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.tablet}px) {
        font-size: 1.5rem;
      }

      @media (max-width: ${theme.breakpoints.mobile}px) {
        font-size: 1rem;
      }
    `}
`;
