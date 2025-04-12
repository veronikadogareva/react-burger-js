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
import { ORDER_CLEAR, sendOrder } from "../../services/order/action";
import { useDrop } from "react-dnd";
import { getUser } from "../../services/user/selectors";
import { useNavigate } from "react-router-dom";
import { TIngredient } from "../../utils/types";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [price, setPrice] = useState(0);
  const ingredients = useSelector(getConstructorIngredients);
  const bun = useSelector(getConstructorBun);
  const orderId = useSelector(getOrderId);
  const user = useSelector(getUser);
  const totalPrice = useMemo(() => {
    return ingredients.reduce((total: number, ingredient: TIngredient) => total + ingredient.price, 0) + (bun ? bun.price * 2 : 0);
  }, [ingredients, bun]);
  useEffect(() => {
    setPrice(totalPrice);
  }, [totalPrice]);
  const clickOrderButton = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (!ingredients || !bun) {
      setError("Добавьте ингредиенты");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    const order = {
      ingredients: [bun?._id, ...ingredients.map((ingredient: TIngredient) => ingredient._id), bun?._id],
    };
    //@ts-expect-error "redux"
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
  const onClickModal = () => {
    closeModal();
    dispatch({
      type: ORDER_CLEAR,
    });
  };
  return (
    <React.Fragment>
      <section className={burgerConstructorStyles.container}>
        <ul ref={drop as unknown as React.RefObject<HTMLUListElement>}>
          {bun ? (
            <li>
              <ConstructorElement type="top" isLocked={true} price={bun.price} text={bun.name + "(верх)"} thumbnail={bun.image_mobile} />
            </li>
          ) : (
            <li>
              <div className="constructor-element constructor-element_pos_top">
                <span className="constructor-element__row">
                  <span className={`constructor-element__text ${burgerConstructorStyles.centerElement}`}>Добавьте булку</span>
                </span>
              </div>
            </li>
          )}
          <SimpleBar style={{ maxHeight: 450, overflowX: "hidden" }}>
            {ingredients.length !== 0 ? (
              ingredients.map((ingredient: TIngredient, index: number) => {
                return <BurgerConstructorElement ingredient={ingredient} key={ingredient.unique} index={index} />;
              })
            ) : (
              <li>
                <div className="constructor-element constructor-element_pos_main">
                  <span className="constructor-element__row">
                    <span className={`constructor-element__text ${burgerConstructorStyles.centerElement}`}>Добавьте начинку</span>
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
              <div className="constructor-element constructor-element_pos_bottom">
                <span className="constructor-element__row">
                  <span className={`constructor-element__text ${burgerConstructorStyles.centerElement}`}>Добавьте булку</span>
                </span>
              </div>
            </li>
          )}
        </ul>
        <span style={{ color: "#FB76CF" }}>{error}</span>
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
        <Modal onClose={onClickModal}>
          <OrderDetails orderId={orderId} />
        </Modal>
      )}
    </React.Fragment>
  );
}
