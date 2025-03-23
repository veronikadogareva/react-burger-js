import { INGREDIENT_ADD, INGREDIENT_DELETE } from "./action"

const initialState = {
    selectedIngredient:null,
    isModal:false,
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INGREDIENT_ADD:
            return {
                ...state,
                isModal:true,
                selectedIngredient:action.payload,
            }
        case INGREDIENT_DELETE:
            return {
                ...state,
                isModal:false,
                selectedIngredient:null,
            }
        default:
            return state
    }
}