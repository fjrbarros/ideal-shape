import styled, { css, keyframes } from 'styled-components';
import { AppContainer as AppContainerCP } from '@components';

export const AppContainer = styled(AppContainerCP)`
  height: 100dvh;
  display: flex;
  align-items: center;
  background: url(https://static.vecteezy.com/system/resources/previews/022/460/823/large_2x/muscular-bodybuilder-female-athlete-demonstrates-her-body-in-the-gym-generative-ai-free-photo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  transition: all 0.3s;
  @media (min-width: 1600px) {
    background-position: 50% 0;
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.tablet}px) {
        max-width: 100%;
      }
    `}
`;

export const Title1 = styled.p`
  font-size: clamp(1.5rem, 4vw, 3rem);
`;

export const Title2 = styled(Title1)`
  color: #ff4b00;
  font-size: clamp(2rem, 5vw, 4rem);
`;

export const Subtitle = styled.span`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  display: inline-block;
  text-align: justify;
  max-width: 50%;
  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.tablet}px) {
        font-size: 1rem;
        max-width: 80%;
      }
    `}
`;

export const FlexContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.mobile}px) {
        flex-direction: column;
        gap: 0.7rem;
      }
    `}
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;

export const CountInfo = styled.span`
  font-size: 2.5rem;
  font-style: italic;
  font-weight: bold;
  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.tablet}px) {
        font-size: 1.4rem;
      }
    `}
`;

export const CountText = styled.span`
  font-size: 1rem;
  white-space: nowrap;
  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.tablet}px) {
        font-size: 0.8rem;
      }
    `}
`;

export const Divider = styled.div`
  min-height: 100%;
  width: 1px;
  background-color: #9d9d9d;
  margin: 0 1rem;
  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.tablet}px) {
        margin: 0 0.5rem;
      }
      @media (max-width: ${theme.breakpoints.mobile}px) {
        display: none;
      }
    `}
`;

export const HourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.5rem;
  max-width: fit-content;
  background-color: #00000057;
  padding: 1rem;
  border-radius: 10px;
  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.tablet}px) {
        padding: 0.6rem;
        background-color: transparent;
      }
    `}
`;

const textClip = keyframes`
  to {
    background-position: 200% center;
  }
`;

export const HourTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(to right,rgb(204, 204, 204) 10%, #a75d00 40%, #ff4b00 80%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textClip} 1.5s linear infinite;
  display: inline-block;
`;

export const HourText = styled.p`
  font-size: 1.2rem;
  & span {
    font-weight: bold;
    font-size: 1.1rem;
    color: #ff4b00;
  }

  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakpoints.tablet}px) {
        font-size: 1rem;
        & span {
          font-size: 1rem;
        }
      }
    `}
`;
