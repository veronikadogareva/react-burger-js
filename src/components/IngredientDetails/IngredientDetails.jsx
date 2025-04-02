import React, { useEffect } from "react";
import ingredientDetailsStyles from "./ingredientDetails.module.css";
import IngredientType from "../../utils/types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllIngredients } from "../../services/ingredients/selectors";
import { loadIngredients } from "../../services/ingredients/action";

export default function IngredientDetails() {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);
  const ingredients = useSelector(getAllIngredients);
  const ingredient = ingredients.filter((ingredient) => ingredient._id === id)[0];
  console.log(ingredients);
  return (
    <div className={ingredientDetailsStyles.container}>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <h3 className="text text_type_main-medium">{ingredient.name}</h3>
      <ul>
        <li>
          <span className="text text_type_main-default text_color_inactive">Калории,ккал</span>
          <span className="text text_type_digits-default text_color_inactive">{ingredient.calories}</span>
        </li>
        <li>
          <span className="text text_type_main-default text_color_inactive">Белки, г</span>
          <span className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</span>
        </li>
        <li>
          <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
          <span className="text text_type_digits-default text_color_inactive">{ingredient.fat}</span>
        </li>
        <li>
          <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
          <span className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
}
IngredientDetails.propTypes = {
  ingredient: IngredientType.isRequired,
};
