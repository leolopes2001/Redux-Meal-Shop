import { motion } from "framer-motion";
import CartClear from "./components/CartClear";
import CartHeader from "./components/CartHeader";
import CartList from "./components/CartList";
import { MainStyled } from "./style";

const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <MainStyled>
        <div>
          <CartHeader />

          <hr />
          <CartList />

          <CartClear />
        </div>
      </MainStyled>
    </motion.div>
  );
};

export default Main;
