import { useSelector } from "react-redux";
import { CartHeaderStyled } from "./style";

const CartHeader = () => {
  const { total_price, total_quantity } = useSelector((state) => state.cart);

  return (
    <CartHeaderStyled>
      <h4>
        <span>Preço total:</span> R$ {total_price.toFixed(2)}
      </h4>
      <h4>
        <span>Quantidade:</span> {total_quantity}
      </h4>
    </CartHeaderStyled>
  );
};

export default CartHeader;
