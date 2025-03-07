import { CONSTRUCTOR_INGREDIENT_ADD, CONSTRUCTOR_INGREDIENT_DELETE, CONSTRUCTOR_INGREDIENT_REORDER } from "./action";

const initialState = {
  bun: null,
  ingredients: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTRUCTOR_INGREDIENT_ADD:
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: action.payload,
        };
      }
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case CONSTRUCTOR_INGREDIENT_DELETE:
      return {
        ...state,
        ingredients: state.ingredients.filter((item) => item.unique !== action.payload),
      };
    case CONSTRUCTOR_INGREDIENT_REORDER:
      const { dragIndex, hoverIndex } = action.payload;
      const ingredients = [...state.ingredients];
      const draggedIngredient = ingredients[dragIndex];
      ingredients.splice(dragIndex, 1);
      ingredients.splice(hoverIndex, 0, draggedIngredient);
      return {
        ...state,
        ingredients: ingredients,
      };
    default:
      return state;
  }
};
