import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LayoutSplashScreen } from "../../../_metronic";
import LogoutPage from "../auth/Logout";

import AdminDashBoard from "./DashboardPage";
import ProductListPage from "./ProductListPage";
import UserListPage from "./UserListPage";
import OrderListPage from "./OrderListPage";
import PendingOrderPage from "./PendingOrder";
import OrderbyCustomerPage from "./OrderbyCustomer";

export default function AdminHomePage() {
  // useEffect(() => {
  //   console.log('Home page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <Redirect exact from="/" to="/admin/dashboard" />
        <Redirect exact from="/auth/login" to="/admin/dashboard" />

        <Route path="/admin/dashboard" component={AdminDashBoard} />
        <Route path="/admin/product-list" component={ProductListPage} />
        <Route path="/admin/user-list" component={UserListPage} />
        <Route path="/admin/order-list" component={OrderListPage} />
        <Route path="/admin/pending-order" component={PendingOrderPage} />
        <Route path="/admin/order-customer" component={OrderbyCustomerPage} />
        <Route path="/auth/logout" component={LogoutPage} />
        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
}
