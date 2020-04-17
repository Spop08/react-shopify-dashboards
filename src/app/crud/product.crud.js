import { crudAPI } from "./api.crud.js";

const FETCH_IMPORT_PRODUCTS = "api/user/imported";
const FETCH_STORE_PRODUCTS = "api/user/my-products";
const FETCH_HOT_PRODUCTS = "api/product/listTop";
const FETCH_SALE_PRODUCTS = "api/product/listSale";
const FETCH_PRODUCT_BY_ID = "api/product/detail";
const FETCH_PRODUCTS_BY_CATEGORY = "api/product/category";
const ADD_TO_STORE = "api/product/add2store";
const ADD_TO_IMPORT = "api/product/import";
const ADD_ALIPRODUCT_TO_IMPORT = "api/ali_product/info";
const FETCH_ALL_PRODUCTS = "api/product/listAll";
const ADD_PRODUCT_TO_ADMIN = "admin/api/product/add";
const EDIT_IMPORTED_PRODUCT = "api/user/imported/edit";
const REMOVE_ADMIN_PRODUCT = "admin/api/product/remove";
const EDIT_ADMIN_PRODUCT = "admin/api/product/edit";
const ADD_ADMIN_ALIPRODUCT = "admin/api/ali_product/add";

//Fetch/Add To Store/Add to Import APIs
export function fetchImportProducts(token) {
  return crudAPI(FETCH_IMPORT_PRODUCTS, "post", null, token).then(
    (res) => res.data.data.products
  );
}
export function fetchStoreProducts(token) {
  return crudAPI(FETCH_STORE_PRODUCTS, "post", null, token).then(
    (res) => res.data.data.products
  );
}

export function fetchHotProducts(token, count) {
  return crudAPI(FETCH_HOT_PRODUCTS, "post", { count }, token).then(
    (res) => res.data.data.products
  );
}

export function fetchSaleProducts(token) {
  return crudAPI(FETCH_SALE_PRODUCTS, "post", null, token).then(
    (res) => res.data.data.products
  );
}

export function addToImport(token, id) {
  return crudAPI(ADD_TO_IMPORT, "post", { id }, token).then((res) => res.data);
}

export function fetchProductById(token, id) {
  return crudAPI(FETCH_PRODUCT_BY_ID, "post", { id }, token).then(
    (res) => res.data.data
  );
}

export function fetchProductsByCategory(token, type) {
  return crudAPI(
    FETCH_PRODUCTS_BY_CATEGORY,
    "post",
    { category: type },
    token
  ).then((res) => res.data.data.products);
}

export function addToStore(token, id) {
  return crudAPI(ADD_TO_STORE, "post", { id }, token).then((res) => res.data);
}

export function fetchAllProducts(token) {
  return crudAPI(FETCH_ALL_PRODUCTS, "post", null, token).then(
    (res) => res.data.data.products
  );
}

export function addAliProductToStore(token, id) {
  return crudAPI(
    ADD_ALIPRODUCT_TO_IMPORT,
    "post",
    { product_id: id },
    token
  ).then((res) => res.data);
}

export function addProductToAdmin(token, data) {
  return crudAPI(ADD_PRODUCT_TO_ADMIN, "post", data, token);
}

export function editImportedProduct(token, data) {
  return crudAPI(EDIT_IMPORTED_PRODUCT, "post", data, token);
}

export function removeAdminProduct(token, data) {
  return crudAPI(REMOVE_ADMIN_PRODUCT, "post", data, token);
}

export function editAdminProduct(token, data) {
  return crudAPI(EDIT_ADMIN_PRODUCT, "post", data, token);
}
export function addAdminAliProduct(token, id) {
  return crudAPI(ADD_ADMIN_ALIPRODUCT, "post", { product_id: id }, token);
}
