import React from "react";
import profileStyles from "./profile.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className={profileStyles.container}>
      <div className={profileStyles.nav}>
        <NavLink to="" className={({ isActive }) => (isActive ? profileStyles.activeLink : "")}>
          Профиль
        </NavLink>
        <NavLink to="orders" className={({ isActive }) => (isActive ? profileStyles.activeLink : "")}>
          История заказов
        </NavLink>
        <NavLink to="orders/:id" className={({ isActive }) => (isActive ? profileStyles.activeLink : "")}>
          Выход
        </NavLink>
        <span className="text text_type_main-default text_color_inactive">В этом разделе вы можете изменить свои персональные данные</span>
      </div>
      <div className={profileStyles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
