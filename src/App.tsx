import AppHeader from "../src/components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import { data } from "./utils/data";
import "./App.css";
import { useState } from "react";

function App() {
  const [ingerdients] = useState(data);
  return (
    <div>
      <AppHeader />
      <main className="boxwrap">
        <div className="innerbox">
        <BurgerIngredients data={ingerdients}/>
        <BurgerConstructor />
        </div>
      </main>
    </div>
  );
}

export default App;
