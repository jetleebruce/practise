import { useEffect, useState } from "react";
import AppHeader from "../src/components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredient, { data } from "./utils/data";
import "./App.css";

function App() {
  const [ingerdients, setIngredients] = useState<BurgerIngredient[]>([]);
  const all = data;
  useEffect(() => {
    setIngredients(all);
  }, [all]);

  return (
    <div>
      <AppHeader />
      <main className="boxwrap">
        <div className="innerbox">
          <BurgerIngredients data={ingerdients} />
          <BurgerConstructor />
        </div>
      </main>
    </div>
  );
}

export default App;
