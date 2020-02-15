import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
// import "./variants.table.scss";

const columns = [
  {
    dataField: "no",
    text: "No",
    style: { whiteSpace: "nowrap" }
  },
  {
    dataField: "email",
    text: "Email",
    style: { whiteSpace: "nowrap" }
  },
  {
    dataField: "storeName",
    text: "Store Name",
    style: { whiteSpace: "nowrap" }
  }
];

export default class UserListPage extends React.Component {
  state = {
    users: [
      {
        no: "1",
        email: "test1@test.com",
        storeName: "uds-dropshippingstore.myshopify.com"
      },
      {
        no: "2",
        email: "test2@test.com",
        storeName: "uds-dropshippingstore.myshopify.com"
      },
      {
        no: "3",
        email: "test3@test.com",
        storeName: "uds-dropshippingstore.myshopify.com"
      },
      {
        no: "4",
        email: "test4@test.com",
        storeName: "uds-dropshippingstore.myshopify.com"
      }
    ]
  };
  render() {
    const { users } = this.state;
    return (
      <BootstrapTable
        keyField="id"
        data={users}
        columns={columns}
        // cellEdit={cellEditFactory({
        //   mode: "click",
        //   blurToSave: true,
        //   afterSaveCell
        // })}
      />
    );
  }
}
