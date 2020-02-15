import React from "react";
import MUIDataTable from "mui-datatables";

import SellerToolbarSelect from "../../components/sellertoolbar";

const UserList = () => {
  const columns = [
    {
      name: "no",
      label: "No",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "store",
      label: "Shop",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "products_cnt",
      label: "Products Count",
      options: {
        filter: true,
        sort: false
      }
    }
  ];

  const data = [
    {
      no: 1,
      name: "Joe James",
      email: "a@a.com",
      store: "udsdropship",
      products_cnt: 3
    },
    {
      no: 2,
      name: "Joe James",
      email: "a@a.com",
      store: "udsdropship",
      products_cnt: 3
    },
    {
      no: 3,
      name: "Joe James",
      email: "a@a.com",
      store: "udsdropship",
      products_cnt: 3
    },
    {
      no: 4,
      name: "Joe James",
      email: "a@a.com",
      store: "udsdropship",
      products_cnt: 3
    },
    {
      no: 5,
      name: "Joe James",
      email: "a@a.com",
      store: "udsdropship",
      products_cnt: 3
    },
    {
      no: 6,
      name: "Joe James",
      email: "a@a.com",
      store: "udsdropship",
      products_cnt: 3
    },
    {
      no: 7,
      name: "Joe James",
      email: "a@a.com",
      store: "udsdropship",
      products_cnt: 3
    }
  ];

  const options = {
    filterType: "checkbox",
    customToolbarSelect: selectedRows => (
      <SellerToolbarSelect selectedRows={selectedRows} />
    )
  };

  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default UserList;
