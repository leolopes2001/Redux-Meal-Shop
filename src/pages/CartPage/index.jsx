import { CartContainer } from "./style";
import Waves from "../HomePage/components/Waves";

import Main from "./components/Main";
import Header from "./components/Header";

const CartPage = () => {
  return (
    <CartContainer>
      <Header />
    
      <Main />

      <Waves />
    </CartContainer>
  );
};

export default CartPage;
