import actionTypes from "../../../constants/actionTypes";

import lang from "../../../constants/lang";

const { UZBEK, RUSSIAN } = lang;
const { SWITCH_TO_UZBEK, SWITCH_TO_RUSSIAN, SWITCH_LANG } = actionTypes;

export const langReducer = (state = RUSSIAN, { type }) => {
  switch (type) {
    case SWITCH_TO_UZBEK:
      return UZBEK;
    case SWITCH_TO_RUSSIAN:
      return RUSSIAN;
    case SWITCH_LANG:
      if (state === UZBEK) {
        return RUSSIAN;
      } else if (state === RUSSIAN) {
        return UZBEK;
      } else {
        return state;
      }
    default:
      return state;
  }
};
