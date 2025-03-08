import React, { useEffect, useMemo, useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import burgerConstructorStyles from "./burgerConstructor.module.css";
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";
import BurgerConstructorElement from "../BurgerConstructorElement/BurgerConstructorElement";
import { useDispatch, useSelector } from "react-redux";
import { getConstructorBun, getConstructorIngredients } from "../../services/constructorIngredients/selectors";
import { getOrderId } from "../../services/order/selectors";
import { sendOrder } from "../../services/order/action";
import { useDrop } from "react-dnd";

export default function BurgerConstructor() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [price, setPrice] = useState(0);
  const ingredients = useSelector(getConstructorIngredients);
  const bun = useSelector(getConstructorBun);
  const orderId = useSelector(getOrderId);
  const dispatch = useDispatch();
  const totalPrice = useMemo(() => {
    return ingredients.reduce((total, ingredient) => total + ingredient.price, 0) + (bun ? bun.price * 2 : 0);
  }, [ingredients, bun]);
  useEffect(() => {
    setPrice(totalPrice);
  }, [totalPrice]);
  const clickOrderButton = () => {
    const order = {
      ingredients: [bun?._id, ...ingredients.map((ingredient) => ingredient._id), bun?._id],
    };
    dispatch(sendOrder(order));
    openModal();
  };
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "ingredient",
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <React.Fragment>
      <section className={burgerConstructorStyles.container}>
        <ul ref={drop}>
          {bun ? (
            <li>
              <ConstructorElement type="top" isLocked={true} price={bun.price} text={bun.name + "(верх)"} thumbnail={bun.image_mobile} />
            </li>
          ) : (
            <li>
              <div class="constructor-element constructor-element_pos_top">
                <span class="constructor-element__row">
                  <span class={`constructor-element__text ${burgerConstructorStyles.centerElement}`}>Добавьте булку</span>
                </span>
              </div>
            </li>
          )}
          <SimpleBar style={{ maxHeight: 450, overflowX: "hidden" }}>
            {ingredients.length !== 0 ? (
              ingredients.map((ingredient, index) => {
                return <BurgerConstructorElement ingredient={ingredient} key={ingredient.unique} index={index} />;
              })
            ) : (
              <li>
                <div class="constructor-element constructor-element_pos_main">
                  <span class="constructor-element__row">
                    <span class={`constructor-element__text ${burgerConstructorStyles.centerElement}`}>Добавьте начинку</span>
                  </span>
                </div>
              </li>
            )}
          </SimpleBar>
          {bun ? (
            <li>
              <ConstructorElement type="bottom" isLocked={true} price={bun.price} text={bun.name + "(низ)"} thumbnail={bun.image_mobile} />
            </li>
          ) : (
            <li>
              <div class="constructor-element constructor-element_pos_bottom">
                <span class="constructor-element__row">
                  <span class={`constructor-element__text ${burgerConstructorStyles.centerElement}`}>Добавьте булку</span>
                </span>
              </div>
            </li>
          )}
        </ul>
        <div className={burgerConstructorStyles.total}>
          <span className="text text_type_digits-medium">
            {price}
            <CurrencyIcon type="primary" />
          </span>
          <Button htmlType="button" type="primary" size="large" onClick={clickOrderButton}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails orderId={orderId} />
        </Modal>
      )}
    </React.Fragment>
  );
}
