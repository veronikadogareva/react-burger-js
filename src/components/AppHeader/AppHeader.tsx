import headerStyles from "./AppHeader.module.css";
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <div className={headerStyles.navGroup}>
          <NavLink to="/" className={({ isActive }) => (isActive ? headerStyles.activelink : "")}>
            {({ isActive }) => (
              <>
                <BurgerIcon type={isActive ? "primary" : "secondary"} /> Конструктор
              </>
            )}
          </NavLink>
          <NavLink to="/profile/orders" className={({ isActive }) => (isActive ? headerStyles.activelink : "")}>
            {({ isActive }) => (
              <>
                <ListIcon type={isActive ? "primary" : "secondary"} /> Лента заказов
              </>
            )}
          </NavLink>
        </div>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? headerStyles.activelink : "")}>
          {({ isActive }) => (
            <>
              <ProfileIcon type={isActive ? "primary" : "secondary"} /> Личный кабинет
            </>
          )}
        </NavLink>
      </nav>
    </header>
  );
}
