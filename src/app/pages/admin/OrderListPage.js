import React from "react";
import MUIDataTable from "mui-datatables";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import OrderToolbarSelect from "../../components/ordertoolbar";

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));


const OrderList = () => {
  const classes = useStyles();

  const columns = [
    {
      name: "no",
      label: "No",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "image",
      label: "Image",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Avatar alt="product img" variant="rounded" src={value} className={classes.large} />
          );
        }
      }
    },
    {
      name: "name",
      label: "Product Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "email",
      label: "Seller Email",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "store",
      label: "Seller Shop",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "isShipped",
      label: "Shipping",
      options: {
        filter: true,
        sort: true,
      }
    },
  ];
 
  const data = [
    { no: 1, image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", email: "a@a.com", store: "udsdropship", status: "Pending", isShipped: "Delivered"},
    { no: 2, image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", email: "a@a.com", store: "udsdropship", status: "Pending", isShipped: "Undelivered"},
    { no: 3, image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", email: "a@a.com", store: "udsdropship", status: "Pending", isShipped: "Delivered"},
    { no: 4, image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", email: "a@a.com", store: "udsdropship", status: "Pending", isShipped: "Undelivered"},
    { no: 5, image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", email: "a@a.com", store: "udsdropship", status: "Pending", isShipped: "Delivered"},
    { no: 6, image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", email: "a@a.com", store: "udsdropship", status: "Pending", isShipped: "Undelivered"},
    { no: 7, image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", email: "a@a.com", store: "udsdropship", status: "Pending", isShipped: "Delivered"},
    { no: 8, image: "https://images-na.ssl-images-amazon.com/images/I/719PHq579pL._SL1500_.jpg", name: "Phone 1", email: "a@a.com", store: "udsdropship", status: "Pending", isShipped: "Undelivered"},
    
  ];
 
  const options = {
   filterType: 'checkbox',
   customToolbarSelect: selectedRows => (
     <OrderToolbarSelect
       selectedRows={selectedRows}
     />
   )
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

export default OrderList;
