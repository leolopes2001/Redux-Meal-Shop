import CardMeal from "./components/CardMeal";
import { ContainerList } from "./style";
import meals from "../../../../mock/meals.json";
import { AnimatePresence, motion } from "framer-motion";

const mealsDivided = () => {
  const mainMeals = [];
  const extraMeals = [];

  meals.forEach((meal, index) => {
    index < 8 ? mainMeals.push(meal) : extraMeals.push(meal);
  });

  return [mainMeals, extraMeals];
};

const Main = ({ showMore }) => {
  const [mainMeals, extraMeals] = mealsDivided();

  return (
    <main>
      <ContainerList>
        <ul>
          {mainMeals.map((meal, idx) => (
            <CardMeal key={meal.id} {...{ ...meal, idx }} />
          ))}
          <AnimatePresence>
            {showMore &&
              extraMeals.map((meal, idx) => (
                <CardMeal key={meal.id} {...{ ...meal, idx: idx * 3 }} />
              ))}
          </AnimatePresence>
        </ul>
      </ContainerList>
    </main>
  );
};

export default Main;
