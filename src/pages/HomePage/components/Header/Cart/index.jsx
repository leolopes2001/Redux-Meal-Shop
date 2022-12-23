import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Counter, LinkCartStyled } from "./style";

const LinkCart = () => {
  const { total_quantity } = useSelector((state) => state.cart);

  return (
    <LinkCartStyled to="/cart">
      <Counter>{total_quantity}</Counter>
      <FaShoppingCart />
    </LinkCartStyled>
  );
};

export default LinkCart;
