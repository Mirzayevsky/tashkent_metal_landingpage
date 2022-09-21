import actionTypes from "../../constants/actionTypes";
import { httpRequest } from "../../utils/httpRequest";
import { reducerContainer } from "./reducerContainer";

const actionType = actionTypes.GET_PRODUCTS_BY_IDS;

export const getProductsByIdsAction = (ids) => ({
  type: actionType,
  payload: httpRequest({
    method: "GET",
    path: "product/ids",
    params: {
      ids: ids.join(","),
    },
  }),
});

export const getProductsByIdsReducer = (state, action) =>
  reducerContainer(state, action, actionType);
