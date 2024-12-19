import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.2s ease-in-out;
  width: 100%;
`;

interface ArrowProps {
  $direction: 'left' | 'right';
}

export const Arrow = styled.div<ArrowProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 10px;
  font-size: 1rem;
  color: #ff4b00;
  background-color: #2d2d2d;
  border-radius: 50%;
  z-index: 1;
  ${({ $direction }) => ($direction === 'left' ? 'left: 15px;' : 'right: 15px;')}
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

interface CardProps {
  $cardWidth: number;
}

export const Card = styled.div<CardProps>`
  min-height: fit-content;
  flex: 0 0 ${({ $cardWidth }) => $cardWidth}%;
  max-width: ${({ $cardWidth }) => $cardWidth}%;

`;
