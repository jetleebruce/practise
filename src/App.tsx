import { useEffect, useState } from "react";
import AppHeader from "../src/components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredient from "./utils/data";
import "./App.css";

export type BurgerIngredientData = {
  success: boolean;
  data: Array<Ingredient>;
};

export interface IngredientData {
  data: Array<Ingredient>
}

export interface Ingredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

function App() {
  const [ingerdients, setIngredients] = useState<BurgerIngredientData>();
  const [error, setError] = useState(null);

  console.log('error', error);

  useEffect(() => {
    fetch(`https://norma.nomoreparties.space/api/ingredients`)
      .then(res => res.json())
      .then(
        (result) => {
          setIngredients(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      )
  }, [])


  return (
    <div>
      <AppHeader />
      <main className="boxwrap">
        <div className="innerbox">
          <BurgerIngredients arrIngred={ingerdients?.data} />
          {ingerdients && (
            <BurgerConstructor arrIngred={ingerdients.data} />
          )}
          
        </div>
      </main>
    </div>
  );
}

export default App;
