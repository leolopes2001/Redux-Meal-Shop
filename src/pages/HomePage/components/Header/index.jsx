import { Link } from "react-router-dom";
import MenuOptions from "../MenuOptions";
import LinkCart from "./Cart";

import { HeaderStyled, ContainerHeader } from "./style";

const Header = () => {
  return (
    <HeaderStyled>
      <ContainerHeader>
        <MenuOptions />

        <LinkCart  />
        <h1 className="title">Redux Meal Shop</h1>
        <Link className="logout" to="/">Sair</Link>
      </ContainerHeader>
    </HeaderStyled>
  );
};

export default Header;
