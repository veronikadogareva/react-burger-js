import React from "react";
import profileStyles from "./profile.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../services/user/action";

function Profile(): React.JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onExitClick = () => {
    //@ts-expect-error "redux"
    dispatch(logout(navigate));
  };
  return (
    <div className={profileStyles.container}>
      <div className={profileStyles.nav}>
        <NavLink to="" className={({ isActive }) => (isActive ? profileStyles.activeLink : "")} end>
          Профиль
        </NavLink>
        <NavLink to="orders" className={({ isActive }) => (isActive ? profileStyles.activeLink : "")}>
          История заказов
        </NavLink>
        <button type="button" onClick={onExitClick}>
          Выход
        </button>
        <span className="text text_type_main-default text_color_inactive">В этом разделе вы можете изменить свои персональные данные</span>
      </div>
      <div className={profileStyles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
