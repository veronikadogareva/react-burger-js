import { USER_ERROR, USER_SET, USER_SET_AUTH_CHECKED } from "./action";

const initialState = {
  user: null,
  isAuthChecked: false,
  error:null,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_AUTH_CHECKED:
      return {
        ...state,
        isAuthChecked: action.payload,
      };
    case USER_SET:
      return {
        ...state,
        error:null,
        user: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        error:action.payload,
      }
    default:
      return state;
  }
};
