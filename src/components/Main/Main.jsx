import React, { useEffect, useState } from "react";
import mainStyles from "./main.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerService from "./Services/BurgerService";
import { useDispatch, useSelector } from "react-redux";
import { getAllIngredients } from "../../services/ingredients/selectors";
import { loadIngredients } from "../../services/ingredients/action";

export default function Main() {
  const dispatch = useDispatch();
  const ingredients = useSelector(getAllIngredients);
  useEffect(() => {
    dispatch(loadIngredients());
  }, []);
  return (
    <main className={mainStyles.main}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor />
    </main>
  );
}
