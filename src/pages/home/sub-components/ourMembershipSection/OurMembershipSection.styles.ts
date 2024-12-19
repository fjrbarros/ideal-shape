import styled, { css } from 'styled-components';

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin: 0.5rem 0 1.5rem 0;
  line-height: 1.2rem;
`;

export const MembershipCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, auto));
  grid-gap: 1rem;

  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.desktop}px) {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
      }

      @media (max-width: ${theme.breakpoints.tablet}px) {
        grid-template-columns: repeat(1, minmax(200px, 1fr));
      }
    `}
`;

export const MembershipCard = styled.div`
  grid-column-end: span 1;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

export const MembershipCardTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
`;

export const MembershipCardSubtitle = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;
  gap: 0.5rem;
`;

export const MembershipCardSubtitlePrice = styled.p`
  font-size: 1.8rem;
  font-weight: 900;
`;

export const MembershipCardSubtitlePeriod = styled.p`
  font-size: 1.5rem;
  color: #cfcfcf;
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 1rem 0;
  border-color: #cfcfcf;
`;

export const List = styled.ul``;
