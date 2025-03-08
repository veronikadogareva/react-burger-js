import React from "react";
import ingredientDetailsStyles from "./ingredientDetails.module.css";
import IngredientType from "../../utils/types";

export default function IngredientDetails({ ingredient }) {
  return (
    <div className={ingredientDetailsStyles.container}>
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
