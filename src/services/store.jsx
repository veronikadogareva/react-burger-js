import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as ingredientsReducer } from "./ingredients/reducer";
import { reducer as selectedIngredientReducer } from "./selectedIngredient/reducer";
import { reducer as constructorIngredientsReducer } from "./constructorIngredients/reducer";
import { reducer as orderReducer } from "./order/reducer";
import { reducer as userReducer } from "./user/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  selectedIngredient: selectedIngredientReducer,
  constructorIngredients: constructorIngredientsReducer,
  order: orderReducer,
  user: userReducer,
});
export const configureStore = (initialState) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
};
