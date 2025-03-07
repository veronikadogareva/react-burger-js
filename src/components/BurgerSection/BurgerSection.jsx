import burgerSectionStyles from "./burgerSection.module.css";
import React from "react";
import PropTypes from "prop-types";

import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import IngredientType from "../../utils/types";

export default function BurgerSection({ ingredients, title, ref }) {
  return (
    <li ref={ref} className={burgerSectionStyles.item}>
      <h3 className="text text_type_main-medium">{title}</h3>
      <ul>
        {ingredients.map((ingredient) => {
          return <BurgerIngredient ingredient={ingredient} key={ingredient._id} />;
        })}
      </ul>
    </li>
  );
}
BurgerSection.propTypes = {
  ingredients: PropTypes.arrayOf(IngredientType),
  title: PropTypes.string,
};
