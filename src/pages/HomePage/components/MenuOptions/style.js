import styled, { css } from "styled-components";

export const MenuOptionsStyled = styled.div`
  position: absolute;
  left: 1rem;
  display: block;

  .divMotion {
    z-index: 1005;
    position: relative;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100px;
  height: 100px;
  background-color: white;
  position: absolute;
  border-radius: 8px;
  top: 1.2rem;
  border: 2px solid #ff9900;
  left: 2rem;
  z-index: 1001;

  ${({ isActive }) =>
    !isActive &&
    css`
      display: none;
    `}

  a {
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: #000;
    transition: color 200ms;
    &:hover {
      color: #ff9900;
    }
  }
`;
