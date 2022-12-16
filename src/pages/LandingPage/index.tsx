import { MainStyled, LadingPageContainer } from "./style";
import CoupleEating from "../../assets/eating.svg";
import Waves from "../HomePage/components/Waves";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <LadingPageContainer>
      <MainStyled>
        <section className="welcome_section">
          <h4>Bem Vindo</h4>
          <h4>a</h4>
          <h4>Redux Meal Shop</h4>

          <Link to="/home">Iniciar</Link>
        </section>
        <section className="img_section">
          <img src={CoupleEating} alt="" />
        </section>
      </MainStyled>

      <footer>
        <Waves />
      </footer>
    </LadingPageContainer>
  );
};

export default LandingPage;
