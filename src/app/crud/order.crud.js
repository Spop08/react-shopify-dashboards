import { crudAPI } from "./api.crud.js";

const FETCH_ALL_ORDERS      = "/admin/api/orders/list";
const FETCH_ORDERS_BY_USERS = "/admin/api/orders/listbyUser";
export function fetchAllOrders(token) {
  return crudAPI(FETCH_ALL_ORDERS, "post", null, token).then(
    res => res.data.data.orders
  );
}

export function fetchOrdersbyUsers(token) {
    return crudAPI(FETCH_ORDERS_BY_USERS, "post", null, token).then(
      res => res.data.data.users
    );
  }