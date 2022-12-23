import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.56);
  padding: 1rem;
  z-index: 100;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-size: 2.7rem;
    color: #ff9900;
  }

  p:nth-of-type(1) {
    font-size: 1.8rem;
    font-weight: 700;
  }
  button {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    background: none;
    border: none;
    font-size: 2rem;
    font-weight: 800;
    color: #000;
    cursor: pointer;

    &:hover {
      color: #ff0000;
    }
  }

  img {
    width: 100%;
    max-width: 240px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  p:nth-of-type(2) {
    font-size: 1.3rem;
    font-weight: 500;
    height: 100%;
    overflow-y: scroll;
    text-align: justify;
    background-color: #0002;
    padding: 2rem;
  }
`;
