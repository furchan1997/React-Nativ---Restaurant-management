import axios from "axios";
import { url } from "../confing.json";

axios.defaults.baseURL = url;

export function setDefaultCommonHeaders(header, value) {
  axios.defaults.headers.common[header] = value;
}

export const httpService = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  setDefaultCommonHeaders,
};
