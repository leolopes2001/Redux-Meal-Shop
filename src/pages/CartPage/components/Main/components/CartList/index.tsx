import { FaTrashAlt } from "react-icons/fa";
import CartItem from "./CartItem";
import { CartListStyled } from "./style";

const CartList = () => {
  return (
    <CartListStyled>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    
    </CartListStyled>
  );
};

export default CartList;
