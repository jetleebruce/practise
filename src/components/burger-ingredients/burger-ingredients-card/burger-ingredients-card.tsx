import cardStyle from "./burger-ingredients-card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface CardProps {
  label: string;
  price: number;
  image: string;
}

const BurgerIngredientsCard = ({ label, price, image }: CardProps) => {
  return (
    <div>
      <div className={cardStyle.imagewrap}>
        <img src={image} alt={label} />
      </div>
      <div className={cardStyle.pricewrap}>
        <p className="text text_type_digits-default">{price}</p>
        <span className={cardStyle.currencyIcon}>
          <CurrencyIcon type="primary" />
        </span>
      </div>
      <div className={cardStyle.textwraper}>
        <p className="text text_type_main-small">{label}</p>
      </div>
    </div>
  );
};

export default BurgerIngredientsCard;
