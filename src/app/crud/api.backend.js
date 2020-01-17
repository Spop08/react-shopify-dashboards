import axios from "axios";

export function call_backend_api(url, method, data) {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_ENDPOINT;
  return axios({
    url,
    headers: { "content-type": "application/json" },
    method,
    data
  });
}
