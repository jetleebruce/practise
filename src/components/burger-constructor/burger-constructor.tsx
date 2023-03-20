import constructorStyles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import substruct from "../../images/subtract.png";
import { Ingredient } from "../../App";

interface Props {
  arrIngred: Ingredient[];
}

const BurgerConstructor = ({ arrIngred }: Props) => {
  const getBunsInfo = arrIngred.find((ingredient) => {
    return ingredient.type === "bun";
  });

  const selectedProducts: Ingredient[] = [];
  while (selectedProducts.length < 5) {
    const randomIndex = Math.floor(Math.random() * arrIngred.length);
    const randomProduct = arrIngred[randomIndex];
    if (
      !selectedProducts.includes(randomProduct) &&
      randomProduct.type !== "bun"
    ) {
      selectedProducts.push(randomProduct);
    }
  }

  return (
    <div className={constructorStyles.blockwrap}>
      <div className={constructorStyles.innerBox}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {getBunsInfo && (
            <div className={constructorStyles.card}>
              <span style={{ visibility: "hidden" }}>
                <DragIcon type="primary" />
              </span>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${getBunsInfo.name} (верх)`}
                price={getBunsInfo.price}
                thumbnail={getBunsInfo.image}
              />
            </div>
          )}
          <div className={constructorStyles.parent}>
            <div className={constructorStyles.child}>
              {selectedProducts.map((product) => (
                <div className={constructorStyles.card}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    key={product._id}
                    text={product.name}
                    price={product.price}
                    thumbnail={product.image}
                  />
                </div>
              ))}
            </div>
          </div>
          {getBunsInfo && (
            <div className={constructorStyles.card}>
              <span style={{ visibility: "hidden" }}>
                <DragIcon type="primary" />
              </span>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${getBunsInfo.name} (низ)`}
                price={getBunsInfo.price}
                thumbnail={getBunsInfo.image}
              />
            </div>
          )}
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
