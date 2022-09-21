import actionTypes from "../../constants/actionTypes";
import { httpRequest } from "../../utils/httpRequest";
import { reducerContainer } from "./reducerContainer";

const actionType = actionTypes.GET_PRODUCTS;

export const getProductAction = (page, size, category, name) => ({
  type: actionType,
  payload: httpRequest({
    method: "GET",
    path: `product`,
    params: { page, size, category: category.join(","), name },
  }),
});

export const getProductReducer = (state, action) =>
  reducerContainer(state, action, actionType);
