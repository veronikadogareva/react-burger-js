import React, { useEffect } from "react";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import Profile from "../../pages/Profile";
import ProfileForm from "../ProfileForm/ProfileForm";
import Orders from "../Orders/Orders";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { checkUserAuth } from "../../services/user/action";
import { OnlyAuth, OnlyUnAuth } from "../ProtectedRoute/ProtectedRoute";
import { loadIngredients } from "../../services/ingredients/action";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = location.state;
  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(loadIngredients());
  }, [dispatch])
  const onModalClose = () => {
    navigate('/');
  }
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
        <Route path="/register" element={<OnlyUnAuth component={<Register />} />} />
        <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword />} />} />
        <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword />} />} />
        <Route path="/profile" element={<OnlyAuth component={<Profile />}/>}>
          <Route path="" element={<ProfileForm />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="/ingredients/:id" element={<IngredientDetails />} />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal onClose={onModalClose}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
