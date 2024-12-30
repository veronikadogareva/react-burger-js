import React, { useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import burgerConstructorStyles from "./burgerConstructor.module.css";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import IngredientType from "../../utils/types";

export default function BurgerConstructor({ ingredients }) {
  const [isModal, setIsModal] = useState(false);
  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);
  return (
    <React.Fragment>
      <section className={burgerConstructorStyles.container}>
        <SimpleBar style={{ maxHeight: 656 }}>
          <ul>
            {ingredients.map((ingredient) => {
              return (
                <li key={ingredient._id}>
                  <ConstructorElement
                    type={ingredient.type}
                    isLocked={true}
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image_mobile}
                  />
                </li>
              );
            })}
          </ul>
        </SimpleBar>
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
      {isModal && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </React.Fragment>
  );
}
BurgerConstructor.propTypes = IngredientType.ingredients;
