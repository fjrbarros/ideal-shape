import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) =>
      css`
        padding: 30px 50px;
        transition: padding 0.2s;
        @media (max-width: ${theme.breakpoints.tablet}px) {
          padding: 90px 50px;
          &:first-child {
             padding:20px 40px
          }
        }

    `}
`;
