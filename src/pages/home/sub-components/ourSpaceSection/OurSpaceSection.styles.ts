import styled, { css } from "styled-components";

export const Title = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
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
