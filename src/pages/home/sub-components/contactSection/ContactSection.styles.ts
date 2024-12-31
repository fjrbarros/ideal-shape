import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const FormBox = styled.div`
  flex: 0.7;
  @media (max-width: 991px) {
    flex: 1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormTitle = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputError = styled.span`
  color: #ff2727;
  font-weight: 500;
  font-size: 0.8rem;
  margin-top: 5px;
`;

export const Submit = styled.button`
  max-width: 50%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 30px;
  margin-left: 50%;
  transform: translate(-50%);
  background-color: transparent;
  color: #9b9b9b;
  border: 1px solid #9b9b9b;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover, &:focus {
    background-color: #2b2b2b;
    color: #ff4b00;
    border-color: #ff4b00;
  }

  & > svg {
    font-size: 1.5rem;
    margin-left: 10px;
  }
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

export const ContactInfo = styled.div`
  flex: 0.3;
  @media (max-width: 991px) {
    margin: 20px 0;
    flex: 1;
  }
`;

export const Box = styled.div`
  position: relative;
  padding: 20px 0;
  display: flex;
  gap: 10px;
`;

export const Icon = styled.div`
  min-width: 40px;
  padding-top: 4px;
  color: #ff4b00;;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 24px;
`;

export const Text = styled.div`
  display: flex;
  font-size: 16px;
  color: #fff;
  flex-direction: column;
  font-weight: 300;
  line-height: 1.3;
  & > h3 {
    color: #ff4b00;;
    margin-bottom: 0;
  }
`;

const primaryColor = '#9400d1';
const secondaryColor = '#ff4b00';
const whiteColor = '#fff';
const grayColor = '#9b9b9b';

export const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`;

export const FormField = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${grayColor};
  outline: 0;
  font-size: 1rem;
  color: ${whiteColor};
  padding: 7px;
  background: transparent;
  resize: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1.1rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ label {
      position: absolute;
      top: -2px;
      display: block;
      transition: 0.2s;
      font-size: 1.2rem;
      color: #ff4b00;;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, ${primaryColor}, ${secondaryColor});
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1.1rem;
  color: ${grayColor};
  left: 7px;
`;
