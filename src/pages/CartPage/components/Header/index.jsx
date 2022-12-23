import { ImArrowLeft2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { ContainerHeader, HeaderStyled } from "./style";

const Header = () => {
  

  return (
    <HeaderStyled>
      <ContainerHeader>
        <Link to="/home">
          <ImArrowLeft2 />
        </Link>
        <h4>Cart</h4>
      </ContainerHeader>
    </HeaderStyled>
  );
};

export default Header;
