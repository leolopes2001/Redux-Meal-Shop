import { useDispatch } from "react-redux";
import { addCartItemThunk } from "../../../../../../store/cart/thunks";
import { openModalThunk } from "../../../../../../store/modal/thunks";
import { CardMealStyled } from "./style";
import { motion } from "framer-motion";

const CardMeal = ({ id, img, name, price, idx }) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: (0.2 * (idx + 1)) / 1.5 }}
    >
      <CardMealStyled>  
        <div>
          <img src={img} alt="Meal Image" />
        </div>
        <div>
          <h4>{name}</h4>
          <p>R$ {price}</p>
        </div>
        <div>
          <button onClick={() => dispatch(addCartItemThunk(id))}>
            Adcionar ao carrinho
          </button>
          <button onClick={() => dispatch(openModalThunk(id))}>Ver mais</button>
        </div>
      </CardMealStyled>
    </motion.div>
  );
};

export default CardMeal;
