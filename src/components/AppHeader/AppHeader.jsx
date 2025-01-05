import React from "react";
import headerStyles from "./AppHeader.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <Logo />
      <nav>
        <div className={headerStyles.navGroup}>
          <a href="#" className="text text_type_main-default">
            <BurgerIcon type="primary" /> Конструктор
          </a>
          <a href="#" className="text text_type_main-default">
            <ListIcon type="secondary" /> Лента заказов
          </a>
        </div>
        <a href="#" className="text text_type_main-default">
          <ProfileIcon type="secondary" /> Личный кабинет
        </a>
      </nav>
    </header>
  );
}
