import BaseService from "../../utils/BaseService";
export const INGREDIENTS_LOADING = "INGREDIENTS/LOADING";
export const INGREDIENTS_SUCCESS = "INGREDIENTS/SUCCESS";
export const INGREDIENTS_ERROR = "INGREDIENTS/ERROR";
export const loadIngredients = () => (dispatch) => {
  dispatch({ type: INGREDIENTS_LOADING });
  return BaseService.getIngredients()
    .then((res) => {
      console.log(1212);
      dispatch({
        type: INGREDIENTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: INGREDIENTS_ERROR,
        payload: err.message,
      });
    });
};
