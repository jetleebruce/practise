import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headertStyles from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className={headertStyles.header}>
      <div className={headertStyles.innerBox}>
        <div className={headertStyles.buttonswrap}>
          <div className={headertStyles.burger}>
            <BurgerIcon type="primary" />
            <span className={headertStyles.burgertext}>
              <p className="text text_type_main-default">Конструктор</p>
            </span>
          </div>
          <div className={headertStyles.order}>
            <ListIcon type="secondary" />
            <span className={headertStyles.ordertext}>
              <p className="text text_type_main-default">Лента заказов</p>
            </span>
          </div>
        </div>
        <div className={headertStyles.logowrap}>
          <div>
            <Logo />
          </div>
        </div>
        <div className={headertStyles.roomwrap}>
          <ProfileIcon type="secondary" />
          <span className={headertStyles.roomtext}>
            <p className="text text_type_main-default">Личный кабинет</p>
          </span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
