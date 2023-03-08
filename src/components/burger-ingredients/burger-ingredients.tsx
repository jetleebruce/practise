import ingredientsStyles from "./burger-ingredients.module.css";
import BurgerIngredient from "../../utils/data";
import { useState } from "react";
import BurgerIngredientsCard from "./burger-ingredients-card/burger-ingredients-card";

type BurgerIngredientData = {
  data: BurgerIngredient[];
};
const BurgerIngredients = (data: BurgerIngredientData) => {
  const [ingredients] = useState(data);
  const boolka = ingredients.data.filter((item: any) => item.type === "bun");
  const soose = ingredients.data.filter((item: any) => item.type === "sauce");
  const nachinka = ingredients.data.filter((item: any) => item.type === "main");
  // console.log(boolka);
  // console.log(soose);
  // console.log(nachinka);
  console.log("inBurger", ingredients);
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
          {boolka.map((item: BurgerIngredient) => (
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
          {soose.map((item: BurgerIngredient) => (
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
          {nachinka.map((item: BurgerIngredient) => (
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
