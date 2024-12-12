import styled, { css } from "styled-components";

export const Title = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
`;

export const CardImg = styled.div<{ $imageUrl: string }>`
  transition: 0.2s all ease-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  height: inherit;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  top: 0;
  background-image: url(${({ $imageUrl }) => $imageUrl});
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 67%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const CardInfo = styled.div`
  z-index: 2;
  background-color: #fff;
  padding: 24px;
  background-color: transparent;
  position: relative;
`;

export const CardIconLink = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

export const CardIcon = styled.li`
  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.tablet}px) {
       transform: translateY(0) !important;
      }
    `}
`;

export const CardIcons = styled.ul`
  list-style: none;
  position: absolute;
  left: 18px;
  z-index: 9;
  bottom: -10px;

  ${CardIcon} {
    display: inline-block;
    font-size: 16px;
    margin: 7px;
    color: #fff;
    transition: transform 0.2s ease-in-out;
    transform: translateY(100px);

    &:nth-child(2) {
      transition-delay: 0.2s;
    }

    &:nth-child(3) {
      transition-delay: 0.3s;
    }

    &:nth-child(4) {
      transition-delay: 0.4s;
    }

    &:hover {
      color: #ff4b00;
    }
  }
`;

export const CardWrapper = styled.div`
  padding: 20px 10px;
`;

export const CardContainer = styled.div`
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #2b2b2b;
  width: 100%;
  height: 400px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    transform: scale(1.05);
  }

  &:hover ${CardImg} {
    height: 100%;
    filter: brightness(0.5);
  }

  &:hover ${CardIcon} {
    transform: translateY(0);
  }
`;

export const CardTrainerName = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 2px;
  font-weight: 500;
  color: #ff4b00;
`;

export const CardTrainerFuncion = styled.h3`
  margin-top: 5px;
  margin: 8px 0;
`;

export const CardTrainerDescription = styled.span`
  font-size: 0.8rem;
  color: #939393;
  font-style: italic;
`;
