import { CONSTRUCTOR_INGREDIENT_ADD, CONSTRUCTOR_INGREDIENT_DELETE } from "./action"

const initialState = {
    bun: null,
    ingredients: [],
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTRUCTOR_INGREDIENT_ADD:
            if (action.payload.type == 'bun') {
                return {
                    ...state,
                    bun: action.payload,
                }
            }
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload],
            }
        case CONSTRUCTOR_INGREDIENT_DELETE:
            return {
                ...state,
                ingredients: state.ingredients.filter(item => item._id !== action.payload),
            }
        default:
            return state;
    }
}