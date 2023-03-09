import constructorStyles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import bunUp from "../../images/bun-02.png";
import sause from "../../images/sauce-03.png";
import meat from "../../images/meat-02.png";
import sp from "../../images/sp.png";
import mineral from "../../images/mineral-rings.png";
import substruct from "../../images/subtract.png";

const BurgerConstructor = () => {
  return (
    <div className={constructorStyles.blockwrap}>
      <div className={constructorStyles.innerBox}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={bunUp}
          />
          <div className={constructorStyles.parent}>
            <div className={constructorStyles.child}>
              <ConstructorElement
                text="Соус традиционный галактический"
                price={50}
                thumbnail={sause}
              />
              <ConstructorElement
                text="Мясо бессмертных моллюсков Protostomia"
                price={50}
                thumbnail={meat}
              />
              <ConstructorElement
                text="Плоды Фалленианского дерева"
                price={50}
                thumbnail={sp}
              />
              <ConstructorElement
                text="Хрустящие минеральные кольца"
                price={50}
                thumbnail={mineral}
              />
              <ConstructorElement
                text="Хрустящие минеральные кольца"
                price={50}
                thumbnail={mineral}
              />
            </div>
          </div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={bunUp}
          />
        </div>
      </div>
      <div className={constructorStyles.order}>
        <span className={constructorStyles.orderBox}>
          <span className={constructorStyles.price}>
            <p className="text text_type_digits-medium">610</p>
            <img src={substruct} alt="subsctruct" />
          </span>
          <span className={constructorStyles.orderButton}>
            <button>
              <p className="text text_type_main-default">Оформить заказ</p>
            </button>
          </span>
        </span>
      </div>
    </div>
  );
};

export default BurgerConstructor;
