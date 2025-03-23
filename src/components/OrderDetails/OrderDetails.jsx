import React from "react";
import orderDetailsStyles from "./orderDetails.module.css";
import done from "../../images/done.png";
import PropTypes from "prop-types";

export default function OrderDetails({ orderId }) {
  return (
    <div className={orderDetailsStyles.container}>
      <span className="text text_type_digits-large">{orderId}</span>
      <h3 className="text text_type_main-medium">идентификатор заказа</h3>
      <img src={done} alt="Иконка подтверждения" />
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}
OrderDetails.propTypes = {
  orderId: PropTypes.number.isRequired,
};
