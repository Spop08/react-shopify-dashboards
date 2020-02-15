import { crudAPI } from "./api.crud.js";

const GET_USER_INFO = "api/user/info";
const GET_IMPORT_PRODUCTS = "api/user/my-products";
const SET_PRICE_RULE = "api/user/set-rule";

export function fetchImportProducts(token) {
  return crudAPI(GET_IMPORT_PRODUCTS, "post", null, token).then(
    res => res.data.products
  );
}

export function fetchUserInfo(token) {
  return crudAPI(GET_USER_INFO, "post", null, token).then(res => res.data);
}

export function setPriceRule(token, rule) {
  crudAPI(SET_PRICE_RULE, "post", { rule }, token);
}
