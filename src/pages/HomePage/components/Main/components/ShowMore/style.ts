import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  button {
    width: 182px;
    height: 45px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    background: #ffffff;
    border-radius: 4px;
    transition: all 200ms;
    cursor: pointer;

    &:hover {
      background-color: #000;
      color: #ff9900;
    }
  }
`;
