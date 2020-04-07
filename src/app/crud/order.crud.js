import { crudAPI } from "./api.crud.js";

const FETCH_ADMIN_ALL_ORDERS = "/admin/api/orders/listAll";
const FETCH_ADMIN_SHIPPED_ORDERS = "/admin/api/orders/listShipped";
const FETCH_ADMIN_PROCESSED_ORDERS = "/admin/api/orders/listProcessed";
const FETCH_ADMIN_UNPROCESSED_ORDERS = "/admin/api/orders/listUnprocessed";
const FETCH_ORDERS_BY_USERS = "/admin/api/orders/listbyUser";
const FETCH_PROCESSED_ORDERS = "/api/order/listProcessed";
const FETCH_DELIVERED_ORDERS = "/api/order/listShipped";
const FETCH_UNPROCESSED_ORDERS = "/api/order/listUnprocessed";
const MARK_AS_PROCESSED = "api/order/markasprocessed";
const MARK_AS_DELIVERED = "api/order/markasshipped";

//Fetch/Update Orders
export function fetchAdminAllOrders(token) {
  return crudAPI(FETCH_ADMIN_ALL_ORDERS, "post", null, token).then(
    (res) => res.data.data.orders
  );
}
export function fetchAdminShippedOrders(token) {
  return crudAPI(FETCH_ADMIN_SHIPPED_ORDERS, "post", null, token).then(
    (res) => res.data.data.orders
  );
}
export function fetchAdminProcessedOrders(token) {
  return crudAPI(FETCH_ADMIN_PROCESSED_ORDERS, "post", null, token).then(
    (res) => res.data.data.orders
  );
}
export function fetchAdminUnProcessedOrders(token) {
  return crudAPI(FETCH_ADMIN_UNPROCESSED_ORDERS, "post", null, token).then(
    (res) => res.data.data.orders
  );
}

export function fetchOrdersbyUsers(token) {
  return crudAPI(FETCH_ORDERS_BY_USERS, "post", null, token).then(
    (res) => res.data.data.users
  );
}

export function fetchProcessedOrders(token) {
  return crudAPI(FETCH_PROCESSED_ORDERS, "post", null, token).then(
    (res) => res.data.data.orders
  );
}

export function fetchDeliveredOrders(token) {
  return crudAPI(FETCH_DELIVERED_ORDERS, "post", null, token).then(
    (res) => res.data.data.orders
  );
}

export function fetchUnProcessedOrders(token) {
  return crudAPI(FETCH_UNPROCESSED_ORDERS, "post", null, token).then(
    (res) => res.data.data.orders
  );
}

export function markAsProcessed(token, data) {
  return crudAPI(MARK_AS_PROCESSED, "post", data, token);
}
export function markAsDelivered(token, data) {
  return crudAPI(MARK_AS_DELIVERED, "post", data, token);
}
