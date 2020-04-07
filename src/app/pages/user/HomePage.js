import React, { Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./DashboardPage";
import { LayoutSplashScreen } from "../../../_metronic";
import LogoutPage from "../auth/Logout";
import SearchProductPage from "./SearchProductPage";
import ShopifyAuthCallBack from "../../auth/ShopifyAuthCallBack";
import ImportListPage from "./ImportListPage";
import MyProductsPage from "./MyProductsPage";
import InProcessingOrderPage from "./InProcessingOrderPage";
import UnProcessedOrderPage from "./UnProcessedOrderPage";
import DeliveredOrderPage from "./DeliveredOrderPage";
import CategoryPage from "./CategoryPage";
import ProductDetailsPage from "./ProductDetailsPage";
import AccountSettingsPage from "./AccountSettingsPage";

import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/ducks/user.duck";
import {
  fetchImportProducts,
  fetchStoreProducts,
} from "../../crud/product.crud";
//Routing for Store Owners
const MainHomePage = () => {
  const token = useSelector((state) => state.auth.authToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInfo = async () => {
      const products_import = await fetchImportProducts(token);
      const products_store = await fetchStoreProducts(token);
      dispatch(actions.f_loadImportProducts(products_import));
      dispatch(actions.f_loadStoreProducts(products_store));
    };
    fetchInfo();
  }, [dispatch, token]); // [] - is required if you need only one call
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
        <Route path="/app/unprocessed-order" component={UnProcessedOrderPage} />
        <Route path="/app/delivered-order" component={DeliveredOrderPage} />
        <Route path="/app/category/:type" component={CategoryPage} />
        <Route path="/app/details/:id" component={ProductDetailsPage} />
        <Route path="/shopify/callback" component={ShopifyAuthCallBack} />
        <Route path="/app/account-settings" component={AccountSettingsPage} />
        <Route path="/auth/logout" component={LogoutPage} />
        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
};

export default MainHomePage;
