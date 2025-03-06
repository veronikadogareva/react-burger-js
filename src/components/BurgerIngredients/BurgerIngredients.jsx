import React, { useEffect, useState } from "react";

import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import PropTypes from "prop-types";

import burgerIngredientsStyles from "./burgerIngredients.module.css";
import BurgerSection from "../BurgerSection/BurgerSection";
import Tabs from "../Tabs/Tabs";
import IngredientType from "../../utils/types";
import { useModal } from "../../hooks/useModal";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedIngredient, getIsModal } from "../../services/selectedIngredient/selectors";
import { INGREDIENT_DELETE } from "../../services/selectedIngredient/action";

export default function BurgerIngredients({ ingredients }) {
  // const [modalIngredient, setModalIngredient] = useState(null);
  const dispatch = useDispatch();
  const isModal = useSelector(getIsModal);
  const selectedIngredient = useSelector(getSelectedIngredient);
  // useEffect(() => {
  //   if (isModal) {
  //     openModal();
  //   }
  // }, [isModal]);
  const closeModal = () => {
    dispatch({
      type:INGREDIENT_DELETE
    })
  }
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
      {isModal && (
        <Modal onClose={closeModal} title="Детали ингредиента">
          <IngredientDetails ingredient={selectedIngredient} />
        </Modal>
      )}
    </React.Fragment>
  );
}
BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(IngredientType),
};
