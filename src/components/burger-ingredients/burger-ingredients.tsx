import ingredientsStyles from "./burger-ingredients.module.css";
import BurgerIngredient from "../../utils/data";
import { useState } from "react";
import BurgerIngredientsCard from "./burger-ingredients-card/burger-ingredients-card";

type BurgerIngredientData = {
  data: BurgerIngredient[];
};
const BurgerIngredients = (data: BurgerIngredientData) => {
  const [ingredients] = useState(data);
  const buns = ingredients.data.filter((item: any) => item.type === "bun");
  const sauces = ingredients.data.filter((item: any) => item.type === "sauce");
  const insides = ingredients.data.filter((item: any) => item.type === "main");

  return (
    <div className={ingredientsStyles.blockwrap}>
      <div className={ingredientsStyles.text}>
        <p className="text text_type_main-large">Соберите булки</p>
      </div>
      <div className={ingredientsStyles.tabwrap}>
        <div className={ingredientsStyles.tab}>
          <p className="text text_type_main-small">Булки</p>
        </div>
        <div className={ingredientsStyles.tab}>
          <p className="text text_type_main-small">Соусы</p>
        </div>
        <div className={ingredientsStyles.tab}>
          <p className="text text_type_main-small">Начинки</p>
        </div>
      </div>
      <div className={ingredientsStyles.parent}>
        <div className={ingredientsStyles.child}>
        <div>
          <span>
            <p className="text text_type_main-medium">Булки</p>
          </span>
        </div>
        <div className={ingredientsStyles.cardwrap}>
          {buns.map((item: BurgerIngredient) => (
            <div key={item._id} className={ingredientsStyles.card}>
              <BurgerIngredientsCard
                label={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
        <div>
          <span>
            <p className="text text_type_main-medium">Соусы</p>
          </span>
        </div>
        <div className={ingredientsStyles.cardwrap}>
          {sauces.map((item: BurgerIngredient) => (
            <div key={item._id} className={ingredientsStyles.card}>
              <BurgerIngredientsCard
                label={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
        <div>
          <span>
            <p className="text text_type_main-medium">Начинки</p>
          </span>
        </div>
        <div className={ingredientsStyles.cardwrap}>
          {insides.map((item: BurgerIngredient) => (
            <div key={item._id} className={ingredientsStyles.card}>
              <BurgerIngredientsCard
                label={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default BurgerIngredients;
