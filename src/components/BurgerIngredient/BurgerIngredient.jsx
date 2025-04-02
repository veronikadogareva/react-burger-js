import React, { useEffect, useState } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientStyles from "./burgerIngredient.module.css";
import { useDispatch, useSelector } from "react-redux";
import { INGREDIENT_ADD } from "../../services/selectedIngredient/action";
import { CONSTRUCTOR_INGREDIENT_ADD } from "../../services/constructorIngredients/action";
import { getConstructorBun, getConstructorIngredients } from "../../services/constructorIngredients/selectors";
import { useDrag } from "react-dnd";
import IngredientType from "../../utils/types";
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation } from "react-router-dom";
import { getAllIngredients } from "../../services/ingredients/selectors";

export default function BurgerIngredient({ ingredient }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const constructorIngredients = useSelector(getAllIngredients);
  const constructorBun = useSelector(getConstructorBun);
  const location = useLocation();
  useEffect(() => {
    if (ingredient.type !== "bun") {
      setCount(constructorIngredients.filter((item) => item._id === ingredient._id).length);
    }
  }, [constructorIngredients, ingredient._id, ingredient.type]);
  useEffect(() => {
    if (ingredient.type === "bun") {
      if (constructorBun && ingredient._id === constructorBun._id) {
        setCount(2);
      } else {
        setCount(0);
      }
    }
  }, [constructorBun, ingredient.type, ingredient._id]);
  const clickIngregient = () => {
    dispatch({
      type: INGREDIENT_ADD,
      payload: ingredient,
    });
  };
  const createNewIngredientWithUnique = (ingredient) => {
    return {
      ...ingredient,
      unique: uuidv4(),
    };
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ingredient",
    item: { ingredient },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        const newIngregient = createNewIngredientWithUnique(ingredient);
        dispatch({
          type: CONSTRUCTOR_INGREDIENT_ADD,
          payload: newIngregient,
        });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  return (
    <Link to={`/ingredients/${ingredient._id}`} state={{ backgroundLocation: location }}>
      <li
        className={burgerIngredientStyles.item}
        // onClick={clickIngregient}
        ref={drag}
      >
        <img src={ingredient.image} alt={ingredient.name} />
        <span className={`text text_type_digits-default ${burgerIngredientStyles.price}`}>
          {ingredient.price}
          <CurrencyIcon type="primary" />
        </span>
        <p className="text text_type_main-default">{ingredient.name}</p>
        {count === 0 ? "" : <span className={`text text_type_digits-default ${burgerIngredientStyles.count}`}>{count}</span>}
      </li>
    </Link>
  );
}
BurgerIngredient.propTypes = {
  ingredient: IngredientType.isRequired,
};
