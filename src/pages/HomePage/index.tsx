import Header from "./components/Header";
import { Main } from "./components/Main";
import { ShowMore } from "./components/Main/components/ShowMore";
import Waves from "./components/Waves";
import { HomeContainer } from "./style";

const HomePage = () => {
  return (
    <HomeContainer>
      <Header />

      <Main />

      <ShowMore />
      <Waves />
    </HomeContainer>
  );
};

export default HomePage;
