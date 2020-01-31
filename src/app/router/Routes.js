/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/pages/auth/AuthPage`, `src/pages/home/HomePage`).
 */

import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { useLastLocation } from "react-router-last-location";
import MainHomePage from "../pages/main/HomePage";
import AdminHomePage from "../pages/admin/HomePage";
import ErrorsPage from "../pages/errors/ErrorsPage";
import LogoutPage from "../pages/auth/Logout";
import { LayoutContextProvider } from "../../_metronic";
import Layout from "../../_metronic/layout/Layout";
import * as routerHelpers from "../router/RouterHelpers";
import LandinPage from "../../app/pages/front";
import AuthPage from "../pages/auth/AuthPage";
import ShopifyAuthCallBack from "../auth/ShopifyAuthCallBack";

export const Routes = withRouter(({ history }) => {
  const lastLocation = useLastLocation();
  routerHelpers.saveLastLocation(lastLocation);

  const { isAuthorized, menuConfig, userLastLocation, isAdmin } = useSelector(
    ({ auth, urls, builder: { menuConfig } }) => ({
      menuConfig,
      isAuthorized: auth.authToken != null,
      isAdmin: auth.authToken != null && auth.user.isAdmin,
      userLastLocation: routerHelpers.getLastLocation()
    }),
    shallowEqual
  );
  console.log("IsAuthorized???", isAuthorized);
  return (
    /* Create `LayoutContext` from current `history` and `menuConfig`. */
    <LayoutContextProvider history={history} menuConfig={menuConfig}>
      <Switch>
        <Route path="/shopify/callback" component={ShopifyAuthCallBack} />
        {!isAuthorized ? (
          <Switch>
            <Route path="/main" component={LandinPage} />
            <Route path="/auth" component={AuthPage} />
            <Redirect to="/main" />
          </Switch>
        ) : (
          <Layout isAdmin={isAdmin}>
            {isAdmin ? <AdminHomePage /> : <MainHomePage />}
          </Layout>
        )}
        <Route path="/error" component={ErrorsPage} />
      </Switch>
    </LayoutContextProvider>
  );
});
