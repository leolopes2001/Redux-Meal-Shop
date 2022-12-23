import { MainStyled, LadingPageContainer } from "./style";
import CoupleEating from "../../assets/eating.svg";
import Waves from "../HomePage/components/Waves";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <LadingPageContainer>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.div>
      <footer>
        <Waves />
      </footer>
    </LadingPageContainer>
  );
};

export default LandingPage;
