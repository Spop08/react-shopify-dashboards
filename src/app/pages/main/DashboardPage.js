import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import DashboardPad from "../../components/dashboard.pad";

export default function Dashboard(props) {

  return (
    <>
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8">
          <DashboardPad />
        </div>
        <div className="col-xl-2"></div>
      </div>
    </>
  );
}
