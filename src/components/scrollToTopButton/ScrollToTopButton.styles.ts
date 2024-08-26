import styled from "styled-components";

export const ScrollToTopButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 8px 18px;
    font-size: 16px;
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

export const Icon = styled.span`
    display: inline-block;
    font-size: 1.5rem;
    margin: 5px 0 -5px 0;
`;
