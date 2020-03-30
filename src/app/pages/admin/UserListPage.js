import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from "react-redux";

import { fetchAllUsers } from "../../crud/user.crud";

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
      label: "Total products",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "orders_cnt",
      label: "Total orders",
      options: {
        filter: true,
        sort: false
      }
    }
  ];

  const options = {
    filterType: "checkbox",
    customToolbarSelect: selectedRows => (
      <SellerToolbarSelect selectedRows={selectedRows} />
    )
  };

  const token = useSelector(state => state.auth.authToken);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetchAllUsers(token);
      setUsers(response);
    };
    fetchUsers();
  }, [token]);

  return (
    <MUIDataTable
      title={"Seller List"}
      data={users}
      columns={columns}
      options={options}
    />
  );
};

export default UserList;
