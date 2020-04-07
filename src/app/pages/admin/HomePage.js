import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LayoutSplashScreen } from "../../../_metronic";
import LogoutPage from "../auth/Logout";

import ProductListPage from "./ProductListPage";
import UserListPage from "./UserListPage";
import AllOrdersPage from "./AllOrdersPage";
import ProcessedOrdersPage from "./ProcessedOrdersPage";
import UnProcessedOrdersPage from "./UnProcessedOrdersPage";
import ShippedOrdersPage from "./ShippedOrdersPage";

//Routing for Admin Page
export default function AdminHomePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <Redirect exact from="/" to="/admin/product-list" />
        <Redirect exact from="/auth/login" to="/admin/product-list" />

        <Route path="/admin/product-list" component={ProductListPage} />
        <Route path="/admin/user-list" component={UserListPage} />
        <Route path="/admin/all-orders" component={AllOrdersPage} />
        <Route
          path="/admin/unprocessed-orders"
          component={UnProcessedOrdersPage}
        />
        <Route path="/admin/processed-orders" component={ProcessedOrdersPage} />
        <Route path="/admin/shipped-orders" component={ShippedOrdersPage} />
        <Route path="/auth/logout" component={LogoutPage} />
        <Redirect to="/error/error-v1" />

        {/* <Route path="/admin/order-list" component={OrderListPage} />
        <Route path="/admin/pending-order" component={PendingOrderPage} />
        <Route path="/admin/order-customer" component={OrderbyCustomerPage} /> */}
      </Switch>
    </Suspense>
  );
}
