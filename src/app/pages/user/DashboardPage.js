import React, { useState } from "react";
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
