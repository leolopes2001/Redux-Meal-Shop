import { FaTrashAlt } from "react-icons/fa";
import CartClear from "./components/CartClear";
import CartHeader from "./components/CartHeader";
import CartList from "./components/CartList";
import { MainStyled } from "./style";

const Main = () => {
  return (
    <MainStyled>
      <div>
        <CartHeader />

        <hr />
        <CartList />

        <CartClear />
      </div>
    </MainStyled>
  );
};

export default Main;
