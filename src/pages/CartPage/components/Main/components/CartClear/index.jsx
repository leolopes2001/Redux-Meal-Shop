import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../../../../store/cart/actions";
import { CartClearStyled } from "./style";

const CartClear = () => {
  const dispatch = useDispatch();
  return (
    <CartClearStyled>
      <button onClick={() => dispatch(clearCart())}>Esvaziar Carrinho</button>
    </CartClearStyled>
  );
};

export default CartClear;
