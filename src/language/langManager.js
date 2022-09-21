import React from "react";
import { useSelector } from "react-redux";
import lang from "../constants/lang";
import uzbek from "./uzbek";
import russian from "./russian";

const { UZBEK, RUSSIAN } = lang;

function Text({ id }) {
  const lang = useSelector((state) => state.lang);
  switch (lang) {
    case UZBEK:
      return uzbek[id] ? uzbek[id] : id;
    case RUSSIAN:
      return russian[id] ? russian[id] : id;
    default:
      return id;
  }
}

export const text = ({ id, lang }) => {
  switch (lang) {
    case UZBEK:
      return uzbek[id] ? uzbek[id] : id;
    case RUSSIAN:
      return russian[id] ? russian[id] : id;
    default:
      return id;
  }
};

export default Text;
