import styled, { css } from "styled-components";

export const MenuStyled = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;
  width: 50px;

  position: relative;
  z-index: 100;

  ${({ isActive }) =>
    isActive &&
    css`
      div {
        background-color: #ff9900;
      }
    `}

  &:hover {
    cursor: pointer;
    div {
      cursor: pointer;
      background-color: #ff9900;
    }
  }
`;
export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
`;
