import React from "react";
import profileStyles from "./profile.module.css";
import { NavLink, Routes, Route } from "react-router-dom";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import Orders from "../components/Orders/Orders";

function Profile() {
  return (
    <div className={profileStyles.container}>
        <div className="nav">
            <NavLink to="">Профиль</NavLink>
            <NavLink to="orders">История заказов</NavLink>
            <NavLink to="orders/:id">Выход</NavLink>
        </div>
        <div className="content">
            <Routes>
                <Route index element={<ProfileForm />}/>
                <Route path="orders" element={<Orders />} />
            </Routes>
        </div>
    </div>
  );
}

export default Profile;
