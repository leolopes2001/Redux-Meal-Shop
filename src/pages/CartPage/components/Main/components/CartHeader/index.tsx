import { CartHeaderStyled } from "./style";

const CartHeader = () => {
  return (
    <CartHeaderStyled>
      <h4>
        <span>Preço total:</span> R$10000
      </h4>
      <h4>
        <span>Quantidade:</span> R$10000
      </h4>
    </CartHeaderStyled>
  );
};

export default CartHeader;
