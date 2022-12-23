import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import { ShowMore } from "./components/Main/components/ShowMore";
import ModalMeal from "./components/ModalMeal";
import Waves from "./components/Waves";
import { HomeContainer } from "./style";

const HomePage = () => {
  const [showMore, setShowMore] = useState();

  return (
    <HomeContainer>
      <Header />

      <ModalMeal />

      <Main showMore={showMore} />

      <ShowMore setShowMore={setShowMore} showMore={showMore} />
      <Waves />
    </HomeContainer>
  );
};

export default HomePage;
