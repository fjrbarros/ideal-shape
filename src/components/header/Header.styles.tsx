import styled from "styled-components";

interface IHeaderStyleProps {
  $isMenuActive: boolean;
}

export const Header = styled.header`
  padding: 30px 80px;
  backdrop-filter: blur(2px);
  border-bottom: 1px solid #2f2f2f;
  color: #ffffff;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: padding 0.2s;
  & > .menu-button {
    display: none;
  }
  @media (max-width: 768px) {
    padding: 20px 40px;
    justify-content: space-between;
    & > .menu-button {
      display: flex;
    }
  }
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
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ $isMenuActive }) => ($isMenuActive ? "0" : "100%")};
    height: 100vh;
    width: 100%;
    padding: 100px 50px;
    gap: 2rem;
    background-color: #101010;
    flex-direction: column;
    transition: 0.3s ease-out;
  }
`;

export const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s, transform 0.1s;
  &:hover {
    color: #ff4b00;
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;
