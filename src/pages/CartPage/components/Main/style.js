import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  hr {
    border: 1px solid #ff9900;
  }

  & > div {
    width: 500px;
    border-radius: 8px;
    background-color: white;
  }
`;
