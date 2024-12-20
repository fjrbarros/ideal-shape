import styled, { css } from 'styled-components';

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const Subtitle = styled.h3`
  font-size: 1rem;
  text-align: center;
  margin: 0.5rem 0 1rem 0;
  line-height: 1.2rem;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24%, 1fr));
  gap: 1rem;
  ${({ theme }) =>
    css`
      @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
      }

      @media (min-width: 601px) and (max-width: ${theme.breakpoints.largeDesktop}px) {
        grid-template-columns: repeat(auto-fill, minmax(44%, 1fr));
      }

      @media (min-width: ${theme.breakpoints.largeDesktop + 1}px) and (max-width: 3000px) {
        grid-template-columns: repeat(auto-fill, minmax(24%, 1fr));
      }
    `}
`;

export const Card = styled.div`
  background-color: var(--card-background, #ffffff);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.div`
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${Card}:hover & {
      transform: scale(1.05);
    }
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const CardInfo = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-color, #333333);

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const CardPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CardPrice = styled.p<{ $isDiscount?: boolean }>`
  font-weight: 600;
  white-space: nowrap;
  font-size: ${({ $isDiscount }) => ($isDiscount ? '1rem' : '1.3rem')};
  text-decoration: ${({ $isDiscount }) => ($isDiscount ? 'line-through #ea3201;' : 'none')};
  color: ${({ $isDiscount }) => ($isDiscount ? '#c5c5c5' : '#333333')};
  & svg {
    margin-right: 0.5rem;
  }
`;

export const CardButton = styled.button`
  background-color: transparent;
  color: #2b2b2b;
  border: 1px solid #2b2b2b;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2b2b2b;
    color: #ff4b00;
    border-color: #ff4b00;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
  }
`;
