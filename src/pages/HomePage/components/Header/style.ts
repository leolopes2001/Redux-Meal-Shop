import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: #000000;
  height: 102px;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 29px;
    color: #ff9900;
  }

  a:nth-child(3) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    height: 32px;
    background: #ffffff;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 12px;
    color: #000000;
    text-decoration: none;
    transition: background-color 200ms;
    &:hover {
      background-color: #ff9900;
    }
  }
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
`;
