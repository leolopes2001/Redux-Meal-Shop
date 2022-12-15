import { Link } from "react-router-dom";
import styled from "styled-components";

export const Counter = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -6px;
  right: 0;
`;

export const LinkCartStyled = styled(Link)`
  transition: transform 100ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  width: 70px;
  svg {
    width: 60px;
    height: 49px;
    color: #ff9900;
  }
  position: relative;
`;
