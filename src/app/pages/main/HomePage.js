import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./DashboardPage";
import DocsPage from "./docs/DocsPage";
import { LayoutSplashScreen } from "../../../_metronic";
import LogoutPage from "../auth/Logout";
import SearchProductPage from "./SearchProductPage";
import ShopifyAuthCallBack from "../../auth/ShopifyAuthCallBack";
import ImportListPage from "./ImportListPage";
import MyProductsPage from "./MyProductsPage";
import InProcessingOrderPage from "./InProcessingOrderPage";
import UnDeliveredOrderPage from "./UnDeliveredOrderPage";
import DeliveredOrderPage from "./DeliveredOrderPage";
import CancelledOrderPage from "./CancelledOrderPage";
import CategoryPage from "./CategoryPage";
import ProductDetailsPage from "./ProductDetailsPage";

const GoogleMaterialPage = lazy(() =>
  import("./google-material/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./react-bootstrap/ReactBootstrapPage")
);

export default function MainHomePage() {
  // useEffect(() => {
  //   console.log('Home page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <Redirect exact from="/" to="/app/dashboard" />
        <Redirect exact from="/auth/login" to="/app/dashboard" />
        <Route path="/app/dashboard" component={Dashboard} />
        <Route path="/app/search-products" component={SearchProductPage} />
        <Route path="/app/import-list" component={ImportListPage} />
        <Route path="/app/my-products" component={MyProductsPage} />
        <Route
          path="/app/inprocessing-order"
          component={InProcessingOrderPage}
        />
        <Route path="/app/undelivered-order" component={UnDeliveredOrderPage} />
        <Route path="/app/delivered-order" component={DeliveredOrderPage} />
        <Route path="/app/cancelled-order" component={CancelledOrderPage} />
        <Route path="/app/category" component={CategoryPage} />
        <Route path="/app/details" component={ProductDetailsPage} />
        <Route path="/shopify/callback" component={ShopifyAuthCallBack} />
        {/* <Route path="/account-settings" component={AccountSettingPage} /> */}
        <Route path="/auth/logout" component={LogoutPage} />
        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
}
