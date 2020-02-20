import { crudAPI } from "./api.crud.js";

const GET_USER_INFO = "api/user/info";
const SET_PRICE_RULE = "api/user/set-rule";

// Admin part
const GET_USERs_LIST = "/admin/api/users/list";
export function fetchUserInfo(token) {
  return crudAPI(GET_USER_INFO, "post", null, token).then(res => res.data.data);
}

export function setPriceRule(token, rule) {
  crudAPI(SET_PRICE_RULE, "post", { rule }, token);
}
// Admin part
export function fetchAllUsers(token) {
  return crudAPI(GET_USERs_LIST, "post", null, token).then(
    res => res.data.data.users
  );
}
