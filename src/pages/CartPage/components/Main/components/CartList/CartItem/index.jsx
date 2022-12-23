import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../../../../../../store/cart/actions";
import { AnimatePresence, motion } from "framer-motion";
import {
  addCartItemThunk,
  removeCartItemThunk,
} from "../../../../../../../store/cart/thunks";
import { CartItemStyled } from "./style";

const CartItem = ({ id, name, quantity, img }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 250 }}
      transition={{ duration: 0.5 }}
    >
      <CartItemStyled>
        <div className="cart_photo">
          <img src={img} alt="" />
        </div>

        <div className="cart_main">
          <h4>{name}</h4>
          <div>
            <button onClick={() => dispatch(addCartItemThunk(id))}>+</button>
            <p>{quantity}</p>
            <button onClick={() => dispatch(removeCartItemThunk(id))}>-</button>
          </div>
        </div>

        <div className="cart_trash">
          <FaTrashAlt onClick={() => dispatch(removeCartItem(id))} />
        </div>
      </CartItemStyled>
    </motion.div>
  );
};

export default CartItem;
