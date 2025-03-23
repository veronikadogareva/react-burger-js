import React, { useEffect } from "react";
import homeStyles from "./home.module.css";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import { useDispatch } from "react-redux";
import { loadIngredients } from "../services/ingredients/action";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={homeStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider>
  );
}

export default Home;
