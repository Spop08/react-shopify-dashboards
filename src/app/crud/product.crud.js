import { crudAPI } from "./api.crud.js";

const FETCH_IMPORT_PRODUCTS = "api/user/imported";
const FETCH_STORE_PRODUCTS = "api/user/my-products";
const FETCH_HOT_PRODUCTS = "api/product/listTop";
const FETCH_SALE_PRODUCTS = "api/product/listSale";
const ADD_TO_IMPORT = "api/product/import";
const FETCH_PRODUCT_BY_ID = "api/product/";

export function fetchImportProducts(token) {
  return crudAPI(FETCH_IMPORT_PRODUCTS, "post", null, token).then(
    res => res.data.data.products
  );
}
export function fetchStoreProducts(token) {
  return crudAPI(FETCH_STORE_PRODUCTS, "post", null, token).then(
    res => res.data.data.products
  );
}

export function fetchHotProducts(token, count) {
  return crudAPI(FETCH_HOT_PRODUCTS, "post", { count }, token).then(
    response => {
      const res = response.data;
      if (res.status === "success") return res.data.products;
      else return "error";
    }
  );
}

export function fetchSaleProducts(token) {
  return crudAPI(FETCH_SALE_PRODUCTS, "post", null, token).then(response => {
    const res = response.data;
    if (res.status === "success") return res.data.products;
    else return "error";
  });
}

export function addToImport(token, id) {
  return crudAPI(ADD_TO_IMPORT, "post", { id }, token).then(res => res.data);
}

export function fetchProductById(token, id) {
  return crudAPI(FETCH_PRODUCT_BY_ID, "post", { id }, token).then(response => {
    const res = response.data;
    if (res.status === "success") return res.data.data;
    else return "error";
  });
}
