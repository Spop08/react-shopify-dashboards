import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as duck_user from "../store/ducks/user.duck";
import { fetchUserInfo } from "../crud/user.crud";
import AdminHomePage from "../pages/admin/HomePage";
import MainHomePage from "../pages/user/HomePage";
import Layout from "../../_metronic/layout/Layout";

const AppRoute = props => {
  const [isAdmin, setAdminState] = useState(undefined);
  useEffect(() => {
    async function fetchInfo() {
      const token = props.token;
      const user_info = await fetchUserInfo(token);

      props.f_loadUserInfo(user_info);
      setAdminState(user_info.isAdmin);
    }
    fetchInfo();
  });
  return isAdmin === undefined ? (
    <></>
  ) : (
    <Layout isAdmin={isAdmin}>
      {isAdmin ? <AdminHomePage /> : <MainHomePage />}
    </Layout>
  );
};
function mapStateToProps(state) {
  return {
    token: state.auth.authToken
  };
}
export default connect(mapStateToProps, {
  ...duck_user.actions
})(AppRoute);
