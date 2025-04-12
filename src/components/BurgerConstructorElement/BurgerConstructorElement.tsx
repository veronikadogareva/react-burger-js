import { useDispatch } from "react-redux";
import burgerConstructorElementStyles from "./burgerConstructorElement.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CONSTRUCTOR_INGREDIENT_DELETE, CONSTRUCTOR_INGREDIENT_REORDER } from "../../services/constructorIngredients/action";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { TIngredient } from "../../utils/types";
type TBurgerConstructorElementProps = {
  ingredient: TIngredient;
  index: number;
};
type DragItem = {
  ingredient: TIngredient;
  index: number;
};
type DragResult = {
  index: number;
};
export default function BurgerConstructorElement({ ingredient, index }: TBurgerConstructorElementProps) {
  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement | null>(null);
  const onClose = () => {
    dispatch({
      type: CONSTRUCTOR_INGREDIENT_DELETE,
      payload: ingredient.unique,
    });
  };

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: string | null }>({
    accept: "INGREDIENT",
    collect: (monitor: DropTargetMonitor<DragItem, void>) => ({
      handlerId: monitor.getHandlerId() as string | null,
    }),
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      if (!hoverBoundingRect) {
        return;
      }

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) {
        return;
      }

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
      <ConstructorElement isLocked={false} text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image_mobile} handleClose={onClose} />
    </li>
  );
}
