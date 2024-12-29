import React, { useState } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientStyles from "./burgerIngredient.module.css";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

export default function BurgerIngredient({ ingredient, count }) {
  const [isModal, setIsModal] = useState(false);
  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);
  return (
    <React.Fragment>
      <li className={burgerIngredientStyles.item} onClick={openModal}>
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
      {isModal && (
        <Modal onClose={closeModal} title="Детали ингредиента">
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </React.Fragment>
  );
}
