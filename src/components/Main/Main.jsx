import React, { useEffect } from "react";
import mainStyles from "./main.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useDispatch, useSelector } from "react-redux";
import { getAllIngredients } from "../../services/ingredients/selectors";
import { loadIngredients } from "../../services/ingredients/action";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Main() {
  const dispatch = useDispatch();
  const ingredients = useSelector(getAllIngredients);
  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={mainStyles.main}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor />
      </main>
    </DndProvider>
  );
}
