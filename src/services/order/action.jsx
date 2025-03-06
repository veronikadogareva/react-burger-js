import BaseService from "../../utils/BaseService";

export const ORDER_SEND = "ORDER/SEND";
export const ORDER_SUCCESS = "ORDER/SUCCESS";
export const ORDER_ERROR = "ORDER/ERROR";
export const sendOrder = (order) => (dispatch) => {
    console.log(1);
    dispatch({ type: ORDER_SEND });
    return BaseService.sendOrder(order)
        .then(res => {
            console.log(res)
            dispatch({
                type: ORDER_SUCCESS,
                payload: res,
            })
                .catch(err => {
                    dispatch({
                        type: ORDER_ERROR,
                        payload: err.message,
                    })
                })
        })

}