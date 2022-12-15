import { FaTrashAlt } from "react-icons/fa";
import {CartItemStyled} from "./style"

const CartItem = () => {
  return (
    <CartItemStyled>
      <div className="cart_photo">
        <img src="https://www.themealdb.com/images/category/beef.png" alt="" />
      </div>

      <div className="cart_main">
        <h4>Arroz</h4>
        <div>
          <button>+</button>
          <p>22</p>
          <button>-</button>
        </div>
      </div>

      <div className="cart_trash">
        <FaTrashAlt />
      </div>
    </CartItemStyled>
  );
};

export default CartItem;
