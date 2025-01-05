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

export default function BurgerIngredients({ ingredients }) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [modalIngredient, setModalIngredient] = useState(null);
  useEffect(() => {
    if (modalIngredient) {
      openModal();
    }
  }, [modalIngredient]);
  console.log(ingredients.filter((i) => i.type === ""));
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
              setModalIngredient={setModalIngredient}
            />
            <BurgerSection
              id="sauces"
              ingredients={ingredients.filter((f) => f.type === "sauce")}
              title="Соусы"
              setModalIngredient={setModalIngredient}
            />
            <BurgerSection
              id="main"
              ingredients={ingredients.filter((f) => f.type === "main")}
              title="Начинки"
              setModalIngredient={setModalIngredient}
            />
          </ul>
        </SimpleBar>
      </section>
      {isModalOpen && (
        <Modal onClose={closeModal} title="Детали ингредиента">
          <IngredientDetails ingredient={modalIngredient} />
        </Modal>
      )}
    </React.Fragment>
  );
}
BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(IngredientType),
};
