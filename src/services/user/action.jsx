import BaseService from "../../utils/BaseService";
import { CONSTRUCTOR_INGREDIENTS_CLEAR } from "../constructorIngredients/action";
export const USER_SET_AUTH_CHECKED = "USER/AUTH_CHEKED";
export const USER_SET = "USER/SET";
export const login = (data) => (dispatch) => {
  return BaseService.login(data).then((res) => {
    dispatch({
      type: USER_SET,
      payload: res.user,
    });
    dispatch({
      type: USER_SET_AUTH_CHECKED,
      payload: true,
    });
    BaseService.setTokens(res.accessToken, res.refreshToken);
  });
};
export const register = (data) => (dispatch) => {
  return BaseService.register(data).then((res) => {
    dispatch({
      type: USER_SET,
      payload: res.user,
    });
    dispatch({
      type: USER_SET_AUTH_CHECKED,
      payload: true,
    });
    BaseService.setTokens(res.accessToken, res.refreshToken);
  });
};
export const checkUserAuth = () => (dispatch) => {
  if (localStorage.getItem("accessToken")) {
    BaseService.getUserData().then((res) => {
      dispatch({
        type: USER_SET,
        payload: res.user,
      });
      dispatch({
        type: USER_SET_AUTH_CHECKED,
        payload: true,
      });
    });
  } else {
    dispatch({
      type: USER_SET_AUTH_CHECKED,
      payload: true,
    });
  }
};
export const logout = (navigate) => (dispatch) => {
  return BaseService.logout().then(() => {
    dispatch({
      type: USER_SET,
      payload: null,
    });
    dispatch({
      type:CONSTRUCTOR_INGREDIENTS_CLEAR,
    })
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  });
};
export const updateUserInfo = (data) => (dispatch) => {
  return BaseService.updateUserData(data).then((res) => {
    dispatch({
      type: USER_SET,
      payload: res.user,
    });
  });
};
