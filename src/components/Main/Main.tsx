import React, { useEffect } from "react";
import mainStyles from "./main.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useDispatch } from "react-redux";
import { loadIngredients } from "../../services/ingredients/action";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Main(): React.JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-expect-error "redux"
    dispatch(loadIngredients());
  }, [dispatch]);
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={mainStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider>
  );
}
