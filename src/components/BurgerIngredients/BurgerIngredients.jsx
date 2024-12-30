import React from "react";

import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";

import burgerIngredientsStyles from "./burgerIngredients.module.css";
import BurgerSection from "../BurgerSection/BurgerSection";
import Tabs from "../Tabs/Tabs";
import IngredientType from '../../utils/types'

export default function BurgerIngredients({ ingredients }) {
  return (
    <React.Fragment>
      <section className={burgerIngredientsStyles.container}>
        <h2 className="text text_type_main-large">Соберите бургер</h2>
        <Tabs />
        <SimpleBar style={{ maxHeight: 716 }}>
          <ul>
            <BurgerSection
              id="buns"
              ingredients={ingredients.filter((f) => f.type === "bun")}
              title="Булки"
            />
            <BurgerSection
              id="sauces"
              ingredients={ingredients.filter((f) => f.type === "sauce")}
              title="Соусы"
            />
            <BurgerSection
              id="main"
              ingredients={ingredients.filter((f) => f.type === "main")}
              title="Начинки"
            />
          </ul>
        </SimpleBar>
      </section>
    </React.Fragment>
  );
}
BurgerIngredients.propTypes = IngredientType.ingredients;
