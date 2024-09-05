import styled, { css } from "styled-components";
import { AppContainer as AppContainerCP } from "@components";
import checkGreen from "../../../../assets/check.png";

export const AppContainer = styled(AppContainerCP)`
    background-color: #1e1e1e;
    color: #ffffff;
`;

export const Title = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    margin-bottom: 3rem;
`;

export const ContainerFlex = styled.div`
    display: flex;

    ${({ theme }) =>
      css`
        @media (max-width: ${theme.breakpoints.tablet}px) {
            flex-direction: column-reverse;
            gap: 1rem;
        }
    `}
`;

export const ListContainer = styled.div`
    flex: 1;
`;

export const List = styled.ul``;

export const ChecklistItem = styled.li`
  margin-bottom: 1rem;
  position: relative;
  padding-left: 30px;

  &::before {
    content: '';
    background-image:  url(${checkGreen});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ImageContainer = styled.div`
    position: relative;
    flex: 1;
    gap: 1rem;
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 80%;
    height: 30vh;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    ${({ theme }) =>
      css`
        @media (min-width: ${theme.breakpoints.largeDesktop}px) {
            height: 35vh;
        }
    `}
`;

export const Image2 = styled(Image)`
    position: absolute;
    top: 40%;
    left: 30%;
    width: 60%;
    height: 15vh;

    ${({ theme }) =>
      css`
        @media (min-width: ${theme.breakpoints.largeDesktop}px) {
            height: 20vh;
        }
    `}
`;

export const Image3 = styled(Image)`
    width: 70%;
    height: 20vh;
    margin-left: 10%;

    ${({ theme }) =>
      css`
        @media (min-width: ${theme.breakpoints.largeDesktop}px) {
            height: 25vh;
        }
    `}
`;
