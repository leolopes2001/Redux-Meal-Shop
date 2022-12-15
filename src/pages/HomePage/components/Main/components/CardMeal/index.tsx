import { CardMealStyled } from "./style";


export const CardMeal = () => {
  return (
    <CardMealStyled>
      <div>
        <img src="https://www.themealdb.com/images/category/beef.png" alt="" />
      </div>
      <div>
        <h4>Arroz</h4>
        <p>R$ 100.00</p>
      </div>
      <div>
        <button>Adcionar ao carrinho</button>
        <button>Ver mais</button>
      </div>
    </CardMealStyled>
  );
};
