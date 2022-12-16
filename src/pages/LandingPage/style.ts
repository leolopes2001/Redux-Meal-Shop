import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #000;
  gap: 3rem;

  .welcome_section {
    text-align: center;
    max-width: 400px;
    width: 100%;
    padding: 1rem;
    h4 {
      color: #ff9900;
      font-size: 2rem;
      margin-bottom: 0.3rem;
    }

    a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #000;
      width: 100%;
      margin-top: 2rem;
      padding: 0.3rem;
      background-color: white;
      border-radius: 8px;
      font-size: 1.2rem;
      border: none;
      font-weight: 800;
      transition: all 200ms;
      max-width: 300px;
      width: 100%;
      &:hover {
        cursor: pointer;
        background-color: #ff9900;
        color: #000;
      }
    }
  }

  .img_section {
    text-align: center;
    img {
      width: 50%;
      max-width: 700px;
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 3rem;
  }
`;
export const LadingPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000;
`;
