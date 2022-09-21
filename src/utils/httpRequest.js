import axios from "axios";
import { baseUrl } from "../constants/link";

export const httpRequest = ({ method, data, path,params }) => {
  const accessToken = localStorage.getItem("access_token");
  return axios({
    method: method,
    data: data,
    url: `${baseUrl}/${path}`,
    params:params
    // headers: {
    //   Authorization: `Bearer ${accessToken}`,
    // },
  });
};
