import React, { useEffect, useState } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientStyles from "./burgerIngredient.module.css";
import { useDispatch, useSelector } from "react-redux";
import { INGREDIENT_ADD } from "../../services/selectedIngredient/action";
import { CONSTRUCTOR_INGREDIENT_ADD } from "../../services/constructorIngredients/action";
import { getConstructorIngredients } from "../../services/constructorIngredients/selectors";

export default function BurgerIngredient({ ingredient}) {
  const dispatch = useDispatch();
  const [count,setCount] =useState(0);
  const constructorIngredients = useSelector(getConstructorIngredients);
   useEffect(() => {
    setCount(constructorIngredients.filter(item => item._id == ingredient._id).length);
     }, [constructorIngredients]);
  const clickIngregient = () => {
    // dispatch({
    //   type:INGREDIENT_ADD,
    //   payload:ingredient,
    // })
    dispatch({
      type: CONSTRUCTOR_INGREDIENT_ADD,
      payload: ingredient,
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
      {count === 0 ? "" : <span
        className={`text text_type_digits-default ${burgerIngredientStyles.count}`}>{count}</span>}
    </li>
  );
}
