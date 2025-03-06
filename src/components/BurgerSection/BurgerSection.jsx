import burgerSectionStyles from "./burgerSection.module.css";
import React, { useEffect, useState } from "react";

import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import { useSelector } from "react-redux";
import { getConstructorIngredients } from "../../services/constructorIngredients/selectors";

export default function BurgerSection({ ingredients, id, title }) {
  return (
    <li id={id} className={burgerSectionStyles.item}>
      <h3 className="text text_type_main-medium">{title}</h3>
      <ul>
        {ingredients.map((ingredient) => {
          
          return (
            <BurgerIngredient
              ingredient={ingredient}
              key={ingredient._id}
            />
          );
        })}
      </ul>
    </li>
  );
}
