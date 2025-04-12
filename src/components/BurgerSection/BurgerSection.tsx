import React from "react";
import burgerSectionStyles from "./burgerSection.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import { TIngredient } from "../../utils/types";

type TBurgerSectionProps = {
  ingredients: Array<TIngredient>;
  title: string;
};

const BurgerSection = React.forwardRef<HTMLLIElement, TBurgerSectionProps>(({ ingredients, title }, ref) => {
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
});

export default BurgerSection;
