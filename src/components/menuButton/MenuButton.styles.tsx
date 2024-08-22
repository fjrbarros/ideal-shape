import styled, { css } from "styled-components";

interface IButtonStyleProps {
  $line1?: boolean;
  $line2?: boolean;
  $line3?: boolean;
  $isActive?: boolean;
}

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  z-index: 1;
`;

export const Svg = styled.svg`
  width: 40px;
  height: 40px;
`;

export const Line = styled.path<IButtonStyleProps>`
  fill: none;
  stroke: #ffffff;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $isActive, $line1 }) =>
    $line1 &&
    css`
      stroke-dasharray: ${$isActive ? "90 207" : "60 207"};
      stroke-dashoffset: ${$isActive ? "-134" : "0"};
    `}

  ${({ $line2, $isActive }) =>
    $line2 &&
    css`
      stroke-dasharray: ${$isActive ? "1 60" : "60 60"};
      stroke-dashoffset: ${$isActive ? "-30" : "0"};
    `}

  ${({ $line3, $isActive }) =>
    $line3 &&
    css`
      stroke-dasharray: ${$isActive ? "90 207" : "60 207"};
      stroke-dashoffset: ${$isActive ? "-134" : "0"};
    `}
`;
