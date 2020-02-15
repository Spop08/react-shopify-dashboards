import { crudAPI } from "./api.crud.js";

const GET_HOT_PRODUCTS = "api/product/listTop";

export function fetchHotProducts(token) {
  return crudAPI(GET_HOT_PRODUCTS, "post", null, token).then(
    res => res.data.products
  );
}
