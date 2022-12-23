import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #D2D2D2;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CardMeal = styled.li`
  margin: 4rem;
  width: 223px;
  height: 280px;
  background: #bebebe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  list-style-type: none;
  padding: 0.4rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid transparent;
  transition: all 200ms;
  cursor: pointer;

  &:hover {
    border: 2px solid #ff9900;
    box-shadow: 0px 0px 14px -1px #000000;
  }

  div:nth-child(1) {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 120px;
  }
  img {
    width: 80%;
    height: 100px;
    object-fit: cover;
  }

  button {
    transition: all 200ms;
    width: 100%;
    margin-top: 0.4rem;
    height: 30px;
    cursor: pointer;
    background-color: white;
    border-radius: 4px;
    border: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.5px;

    color: #000000;

    &:hover {
      background-color: black;
      color: #ff9900;
    }
  }
`;
