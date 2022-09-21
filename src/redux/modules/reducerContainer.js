import { actionTypes } from "../../constants/actionTypes";

const defaultValue = {
  loading: false,
  error: false,
  success: false,
  data: [],
};

export const reducerContainer = (state=defaultValue, action, actionConst) => {
  switch (action.type) {
    case `${actionConst}${actionTypes._PENDING}`:
      return {
        loading: true,
        error: false,
        success: false,
        data: [],
      };
    case `${actionConst}${actionTypes._FULFILLED}`:
      return {
        loading: false,
        error: false,
        success: true,
        data: action.payload.data,
      };
    case `${actionConst}${actionTypes._REJECTED}`:
      return {
        loading: false,
        error: true,
        success: false,
        data: [],
      };
    default:
      return state;
  }
};
