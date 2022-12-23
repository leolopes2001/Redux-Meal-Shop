import styled from "styled-components";

export const CartItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #d9d9d9;
  height: 80px;
  padding: 0.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: border 200ms;

  &:hover{
    border: 2px solid #FF9900;
  }
  .cart_photo {
    margin-right: 1rem;
    border-radius: 8px;
    background-color: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80px;
      object-fit: cover;
    }
  }

  .cart_main {
    width: 100%;

    h4 {
      font-size: 1.6rem;
    }

    div {
      gap: 1rem;
      display: flex;
      align-items: center;

      p {
        font-size: 1.4rem;
        color: #ff9900;
        font-weight: 700;
      }

      button {
        border: none;
        font-size: 1.4rem;
        font-weight: 800;
        background-color: #D9D9D9;

        &:hover {
          color: #FF9900;
          cursor: pointer;
        }
      }

      button:nth-child(3) {
        font-size: 1.8rem;
      }
    }
  }

  .cart_trash {
    display: flex;
    align-items: center;
    svg {
      font-size: 1.4rem;
      transition: color 200ms;
      &:hover{
        color: #ff9900;
        cursor: pointer;
      }
    }
  }
`;
