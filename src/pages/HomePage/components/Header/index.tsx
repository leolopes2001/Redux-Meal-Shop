import { Link } from "react-router-dom";
import LinkCart from "./Cart";

import { HeaderStyled, ContainerHeader } from "./style";

const Header = () => {
  return (
    <HeaderStyled>
      <ContainerHeader>
        <LinkCart />
        <h1>Redux Meal Shop</h1>
        <Link to="/">Sair</Link>
      </ContainerHeader>
    </HeaderStyled>
  );
};

export default Header;
