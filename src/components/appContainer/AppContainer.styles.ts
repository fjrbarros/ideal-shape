import styled, { css } from "styled-components";

export const Container = styled.div<{ $isHeader?: boolean }>`
    ${({ theme, $isHeader }) =>
      css<{ $isHeader?: boolean }>`
        padding: ${$isHeader ? "30px 50px" : "70px 50px"};
        transition: padding 0.2s;
        @media (max-width: ${theme.breakpoints.tablet}px) {
          padding: ${$isHeader ? "20px 40px" : "100px 50px"};
        }

        @media (max-width: ${theme.breakpoints.mobileLarge}px) {
          padding: ${$isHeader ? "20px" : "100px 50px"};
        }
    `}
`;
