import { INGREDIENTS_ERROR, INGREDIENTS_LOADING, INGREDIENTS_SUCCESS } from "./action"

const initialState = {
    ingredients:[],
    loading:false,
    error:null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INGREDIENTS_LOADING:
            return {
                ...state,
                loading:true,
            }
        case INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredients:action.payload ?? [],
                loading:false
            };
        case INGREDIENTS_ERROR:
            return {
                ...state,
                error:action.payload,
                loading:false
            }
        default:
            return state;
    }
}