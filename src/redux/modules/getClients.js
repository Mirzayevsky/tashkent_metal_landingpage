import actionTypes from "../../constants/actionTypes";
import { httpRequest } from "../../utils/httpRequest";
import { reducerContainer } from "./reducerContainer";

const actionType = actionTypes.GET_CLIENTS;

export const getClientAction = () => ({
  type: actionType,
  payload: httpRequest({
    method: "GET",
    path: `client`,
  }),
});

export const getClientReducer = (state, action) =>
  reducerContainer(state, action, actionType);
