import { useState } from "react";
import ingredientsStyles from "./burger-ingredients.module.css";
import BurgerIngredient from "../../utils/data";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsCard from "./burger-ingredients-card/burger-ingredients-card";

type BurgerIngredientData = {
  data: BurgerIngredient[];
};
const BurgerIngredients = (data: BurgerIngredientData) => {
  const ingredients = data;
  const [current, setCurrent] = useState("one");
  const buns = ingredients.data.filter((item: any) => item.type === "bun");
  const sauces = ingredients.data.filter((item: any) => item.type === "sauce");
  const insides = ingredients.data.filter((item: any) => item.type === "main");

  return (
    <div className={ingredientsStyles.blockwrap}>
      <div className={ingredientsStyles.text}>
        <p className="text text_type_main-large">Соберите булки</p>
      </div>
      <div style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={ingredientsStyles.parent}>
        <div className={ingredientsStyles.child}>
          <div className={ingredientsStyles.titlewrap}>
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
