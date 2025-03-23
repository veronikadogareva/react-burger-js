import { useDispatch } from "react-redux";
import burgerConstructorElementStyles from "./burgerConstructorElement.module.css";
import PropTypes from "prop-types";
import IngredientType from "../../utils/types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CONSTRUCTOR_INGREDIENT_DELETE, CONSTRUCTOR_INGREDIENT_REORDER } from "../../services/constructorIngredients/action";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";

export default function BurgerConstructorElement({ ingredient, index }) {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const onClose = () => {
    dispatch({
      type: CONSTRUCTOR_INGREDIENT_DELETE,
      payload: ingredient.unique,
    });
  };
  const [{ handlerId }, drop] = useDrop({
    accept: "INGREDIENT",
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch({
        type: CONSTRUCTOR_INGREDIENT_REORDER,
        payload: { dragIndex, hoverIndex },
      });

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "INGREDIENT",
    item: () => {
      return { ingredient, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <li ref={ref}>
      <ConstructorElement type={ingredient.type} isLocked={false} text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image_mobile} handleClose={onClose} />
    </li>
  );
}
BurgerConstructorElement.propTypes = {
  ingredient: IngredientType.isRequired,
  index: PropTypes.number.isRequired,
};
