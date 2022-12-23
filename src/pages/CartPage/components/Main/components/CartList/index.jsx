import { AnimatePresence, motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { CartListStyled } from "./style";

const CartList = () => {
  const { cart_items } = useSelector((state) => state.cart);

  return (
    <CartListStyled>
      <AnimatePresence>
        {cart_items.map((mealData) => (
          <CartItem key={mealData.id} {...mealData} />
        ))}
      </AnimatePresence>
    </CartListStyled>
  );
};

export default CartList;
