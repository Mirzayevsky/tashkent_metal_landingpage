import actionTypes from "../../constants/actionTypes";
import { httpRequest } from "../../utils/httpRequest";
import { reducerContainer } from "./reducerContainer";

const actionType = actionTypes.GET_CATEGORIES;

export const getCategoriesAction = () => ({
  type: actionType,
  payload: httpRequest({
    method: "GET",
    path: `category`,
  }),
});

export const getCategoriesReducer = (state, action) =>
  reducerContainer(state, action, actionType);

  