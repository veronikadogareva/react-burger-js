import React, { useEffect, useState } from "react";
import mainStyles from "./main.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerService from "./Services/BurgerService";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    console.log('fsdf')
    BurgerService.getIngredients()
      .then((data) => {
        
        setIngredients(data.data);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке ингредиентов:", err);
      });
  }, []);
  return (
    <main className={mainStyles.main}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor ingredients={ingredients} />
    </main>
  );
}
