import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientStyles from "./burgerIngredient.module.css";
import { useDispatch } from "react-redux";
import { INGREDIENT_ADD } from "../../services/selectedIngredient/action";

export default function BurgerIngredient({ ingredient, count, setModalIngredient }) {
  const dispatch = useDispatch();
  const clickIngregient = () => {
    // setModalIngredient(ingredient)
    dispatch({
      type:INGREDIENT_ADD,
      payload:ingredient,
    })
  }
  return (
      <li className={burgerIngredientStyles.item} onClick={clickIngregient}>
        <img src={ingredient.image} alt={ingredient.name} />
        <span
          className={`text text_type_digits-default ${burgerIngredientStyles.price}`}
        >
          {ingredient.price}
          <CurrencyIcon type="primary" />
        </span>
        <p className="text text_type_main-default">{ingredient.name}</p>
        {count && (
          <span
            className={`text text_type_digits-default ${burgerIngredientStyles.count}`}
          >
            {count}
          </span>
        )}
      </li>
  );
}
