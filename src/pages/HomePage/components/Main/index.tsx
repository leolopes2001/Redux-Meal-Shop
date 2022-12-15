import { CardMeal } from "./components/CardMeal";
import { ContainerList, MainStyled } from "./style";

export const Main = () => {
  return (
    <MainStyled>
      <ContainerList>
        <ul>
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
        </ul>
      </ContainerList>
    </MainStyled>
  );
};
