import axios from "axios";

export function crudAPI(url, method, data, token) {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_ENDPOINT;
  if (token)
    return axios({
      url,
      headers: { "content-type": "application/json", secret_token: token },
      method,
      data
    });
  else
    return axios({
      url,
      headers: { "content-type": "application/json" },
      method,
      data
    });
}
