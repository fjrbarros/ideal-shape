import styled from "styled-components";

export const ScrollToTopButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 16px 18px 15px;
    font-size: 1rem;
    background-color: #2d2d2d;
    color: #ff4b00;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s;
    &:hover {
        box-shadow: 0 0px 9px #ff380096;
    }
`;
