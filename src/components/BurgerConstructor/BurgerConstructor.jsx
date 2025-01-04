import React from "react";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import PropTypes from "prop-types";
import burgerConstructorStyles from "./burgerConstructor.module.css";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import IngredientType from "../../utils/types";
import { useModal } from "../../hooks/useModal";

export default function BurgerConstructor({ ingredients }) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const bun = ingredients.filter(i => i.type === "bun")[0];
  return (
    <React.Fragment>
      <section className={burgerConstructorStyles.container}>
      <ul>
        {bun && <li><ConstructorElement type="top" isLocked={true} price={bun.price} text={bun.name + ' (верх)'} thumbnail={bun.image_mobile} /></li>}
        <SimpleBar style={{ maxHeight: 450,overflowX: "hidden"}}>
          
            {ingredients.map((ingredient) => {
              if (ingredient.type !== 'bun'){
                return (
                  <li key={ingredient._id}>
                    <ConstructorElement
                      type={ingredient.type}
                      isLocked={false}
                      text={ingredient.name}
                      price={ingredient.price}
                      thumbnail={ingredient.image_mobile}
                    />
                  </li>
                );
              }
             
            })}
          
        </SimpleBar>
        {bun && <li><ConstructorElement type="bottom" isLocked={true} price={bun.price} thumbnail={bun.image_mobile} text={bun.name + ' (низ)'}/></li>}
        </ul>
        <div className={burgerConstructorStyles.total}>
          <span className="text text_type_digits-medium">
            20
            <CurrencyIcon type="primary" />
          </span>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={openModal}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </React.Fragment>
  );
}
BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(IngredientType),
};