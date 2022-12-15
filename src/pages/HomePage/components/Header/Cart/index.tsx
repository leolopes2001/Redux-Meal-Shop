import { FaShoppingCart } from "react-icons/fa";
import { Counter, LinkCartStyled } from "./style";

const LinkCart = () => {
  return (
    <LinkCartStyled to="/cart">
      <Counter>1</Counter>
      <FaShoppingCart />
    </LinkCartStyled>
  );
};

export default LinkCart;
