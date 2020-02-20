import { crudAPI } from "./api.crud.js";

const FETCH_IMPORT_PRODUCTS = "api/user/imported";
const FETCH_STORE_PRODUCTS = "api/user/my-products";
const FETCH_HOT_PRODUCTS = "api/product/listTop";
const FETCH_SALE_PRODUCTS = "api/product/listSale";
const ADD_TO_IMPORT = "api/product/import";
const FETCH_PRODUCT_BY_ID = "api/product/detail";
const FETCH_PRODUCTS_BY_CATEGORY = "api/product/category";

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
    res => res.data.data.products
  );
}

export function fetchSaleProducts(token) {
  return crudAPI(FETCH_SALE_PRODUCTS, "post", null, token).then(
    res => res.data.data.products
  );
}

export function addToImport(token, id) {
  return crudAPI(ADD_TO_IMPORT, "post", { id }, token).then(res => res.data);
}

export function fetchProductById(token, id) {
  return crudAPI(FETCH_PRODUCT_BY_ID, "post", { id }, token).then(
    res => res.data.data
  );
}

export function fetchProductsByCategory(token, type) {
  return crudAPI(
    FETCH_PRODUCTS_BY_CATEGORY,
    "post",
    { category: type },
    token
  ).then(res => res.data.data.products);
}
