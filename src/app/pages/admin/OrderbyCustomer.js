import React from "react";
import MUIDataTable from "mui-datatables";

import TableBody from '@material-ui/core/TableBody';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import Avatar from '@material-ui/core/Avatar';

import SellerToolbarSelect from "../../components/sellertoolbar";

const UserList = () => {
  
  const columns = [
    {
      name: "no",
      label: "No",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "store",
      label: "Shop",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "order_cnt",
      label: "Order Count",
      options: {
        filter: true,
        sort: false,
      }
    },
  ];
 
  const data = [
    { no: 1, name: "Joe James", email: "a@a.com", store: "udsdropship", order_cnt: 3, orders: [
      {image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", status: "delivered"},
      {image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", status: "delivered"},
      {image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", status: "delivered"},
    ]},
    { no: 2, name: "Joe James", email: "a@a.com", store: "udsdropship", order_cnt: 3, orders: [
      {image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", status: "delivered"},
      {image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", status: "delivered"},
      {image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", status: "delivered"},
    ]},
    { no: 3, name: "Joe James", email: "a@a.com", store: "udsdropship", order_cnt: 3, orders: [
      {image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", status: "delivered"},
      {image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", status: "delivered"},
      {image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", status: "delivered"},
    ]},
  ];
 
  const options = {
   filterType: 'checkbox',
   customToolbarSelect: selectedRows => (
     <SellerToolbarSelect
       selectedRows={selectedRows}
     />
   ),
   renderExpandableRow: (rowData, rowMeta) => {
    console.log(data[[rowData[0] - 1]].orders);
    return (
      <>
        {data[[rowData[0] - 1]].orders.map( (order, i) => 
          <TableRow key={i}>
            <TableCell colSpan={2}></TableCell>
            <TableCell >
              <Avatar alt="product img" variant="rounded" src={order.image} />
            </TableCell>
            <TableCell >
              {order.name}
            </TableCell>
            <TableCell >
              {order.status}
            </TableCell>
          </TableRow>
        )}
      </>
    );
   },
   isRowExpandable: (dataIndex, expandedRows) => {
    // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
    if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0) return false;
    return true;
   },
   expandableRows: true,
   expandableRowsOnClick: true,
   selectableRows: 'none'
  };

  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={options}
    />
  )
}

export default UserList;
