import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as ingredientsReducer} from "./ingredients/reducer";
import { reducer as selectedIngredientReducer} from "./selectedIngredient/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    selectedIngredient:selectedIngredientReducer,
})
export const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}