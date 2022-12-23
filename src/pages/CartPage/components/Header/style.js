import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: #000000;
  height: 102px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 1rem;

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 29px;
    color: #ff9900;
    width: 100%;
    text-align: center;
  }

  svg {
    color: #ff9900;
    font-size: 36px;
    cursor: pointer;
    transition: transform 200ms;

    &:hover{
      transform: scale(1.32);
    }
  }
`;
