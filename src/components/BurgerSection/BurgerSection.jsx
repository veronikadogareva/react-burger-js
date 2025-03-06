import burgerSectionStyles from "./burgerSection.module.css";
import React from "react";

import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

export default function BurgerSection({ ingredients, id, title, setModalIngredient }) {
  return (
    <li id={id} className={burgerSectionStyles.item}>
      <h3 className="text text_type_main-medium">{title}</h3>
      <ul>
        {ingredients.map((ingredient) => {
          return (
            <BurgerIngredient
              ingredient={ingredient}
              count={1}
              key={ingredient._id}
              setModalIngredient={setModalIngredient}
            />
          );
        })}
      </ul>
    </li>
  );
}
