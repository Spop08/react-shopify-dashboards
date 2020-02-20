import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import {useSelector} from 'react-redux';

import { fetchOrdersbyUsers } from "../../crud/order.crud";

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
      name: "orders_cnt",
      label: "Order Count",
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
    ),
    renderExpandableRow: (rowData, rowMeta) => {
      console.log(users[[rowData[0] - 1]].orders);
      return (
        <>
          {users[[rowData[0] - 1]].orders.map((order, i) => (
            <TableRow key={i}>
              <TableCell colSpan={2}></TableCell>
              <TableCell>
                <Avatar alt="product img" variant="rounded" src={order.image} />
              </TableCell>
              <TableCell>{order.product_name}</TableCell>
              <TableCell>{order.isShipped}</TableCell>
              <TableCell>{order.product_type}</TableCell>
            </TableRow>
          ))}
        </>
      );
    },
    isRowExpandable: (dataIndex, expandedRows) => {
      // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
      if (
        expandedRows.data.length > 4 &&
        expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0
      )
        return false;
      return true;
    },
    expandableRows: true,
    expandableRowsOnClick: true,
    selectableRows: "none"
  };

  const token = useSelector(state => state.auth.authToken);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetchOrdersbyUsers(token);
      console.log(response);
      setUsers(response);
    }
    fetchUsers();

  }, []);

  return (
    <MUIDataTable
      title={"Orders by Users"}
      data={users}
      columns={columns}
      options={options}
    />
  );
};

export default UserList;
