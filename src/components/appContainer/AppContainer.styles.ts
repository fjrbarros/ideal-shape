import styled, { css } from "styled-components";

export const Container = styled.div`
    padding: 30px 80px;
    transition: padding 0.2s;
    ${({ theme }) =>
      css`
        @media (max-width: ${theme.breakpoints.tablet}px) {
          padding: 20px 40px;
        }

        @media (max-width: ${theme.breakpoints.mobileLarge}px) {
          padding: 20px;
        }
    `}
`;
