import { CartContainer } from "./style";
import Waves from "../HomePage/components/Waves";
import { Header } from "./components/Header";
import Main from "./components/Main";

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
