import { crudAPI } from "./api.crud.js";

const FETCH_ALL_CATEGORIES = "/admin/api/category/list";
const ADD_CATEGORY = "/admin/api/category/add";
const REMOVE_CATEGORY = "/admin/api/category/remove";

//Fetch All Categories
export function fetchAllCategories(token) {
  return crudAPI(FETCH_ALL_CATEGORIES, "post", null, token).then(
    (res) => res.data.data
  );
}

//Add Category
export function addCategory(token, title) {
  return crudAPI(ADD_CATEGORY, "post", { title: title }, token).then(
    (res) => res.data
  );
}

//Remove Category
export function removeCategory(token, id) {
  return crudAPI(REMOVE_CATEGORY, "post", { id: id }, token).then(
    (res) => res.data
  );
}
