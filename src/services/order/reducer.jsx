import { ORDER_ERROR, ORDER_SEND, ORDER_SUCCESS } from "./action";

const initialState = {
    id: null,
    error:null,
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_SEND:
            return {
                ...state,
                loading: true,
            }
        case ORDER_SUCCESS:
            return {
                ...state,
                id: action.order.number ?? null,
                loading: false
            };
        case ORDER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}