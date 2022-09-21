import actionTypes from "../../constants/actionTypes";
import { httpRequest } from "../../utils/httpRequest";
import { reducerContainer } from "./reducerContainer";

const actionType = actionTypes.GET_CERTIFICATES;

export const getCertificateAction = () => ({
  type: actionType,
  payload: httpRequest({
    method: "GET",
    path: `certificate`,
  }),
});

export const getCertificateReducer = (state, action) =>
  reducerContainer(state, action, actionType);
