import actionTypes from "../../constants/actionTypes";
import { httpRequest } from "../../utils/httpRequest";
import { reducerContainer } from "./reducerContainer";

const actionType = actionTypes.GET_SUPPLIERS;

export const getSupplierAction = () => ({
  type: actionType,
  payload: httpRequest({
    method: "GET",
    path: `supplier`,
  }),
});

export const getSupplierReducer = (state, action) =>
  reducerContainer(state, action, actionType);
