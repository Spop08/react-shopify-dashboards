import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import DashboardPad from "../../components/dashboard.pad";

export default function AdminDashBoard(props) {
  return (
    <>
      <div className="row">
        <p>I am Admin Dashboard</p>
      </div>
    </>
  );
}
