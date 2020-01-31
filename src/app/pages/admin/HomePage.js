import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LayoutSplashScreen } from "../../../_metronic";
import LogoutPage from "../auth/Logout";
import AdminDashBoard from "./DashboardPage";

const GoogleMaterialPage = lazy(() =>
  import("../main/google-material/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("../main/react-bootstrap/ReactBootstrapPage")
);

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

        <Route path="/auth/logout" component={LogoutPage} />
        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
}