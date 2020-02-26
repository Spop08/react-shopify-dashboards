import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fetchAllProducts } from "../../crud/product.crud";
import SellerToolbarSelect from "../../components/sellertoolbar";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import { TextField, Grid } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import "./ProductListPage.scss";

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  }
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: 200
  // }
}));

const ProductsListPage = () => {
  const classes = useStyles();
  const token = useSelector(state => state.auth.authToken);
  const [open, setOpenDialog] = useState(true);
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({
    title: "",
    description: "",
    category: "",
    variants: [
      {
        size: "",
        color: "",
        price: ""
      }
    ]
  });

  const options = {
    filterType: "checkbox",
    customToolbarSelect: selectedRows => (
      <SellerToolbarSelect selectedRows={selectedRows} />
    )
  };
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
      name: "image",
      label: "Image",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Avatar
              alt="product img"
              variant="rounded"
              src={value}
              className={classes.large}
            />
          );
        }
      }
    },
    {
      name: "title",
      label: "Title",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "category",
      label: "Category",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "description",
      label: "Description",
      options: {
        filter: true,
        sort: false
      }
    }
  ];
  useEffect(() => {
    const fetchUsers = async () => {
      const products = await fetchAllProducts(token);
      console.log(products);
      var _products = [];
      products.map(item => {
        return _products.push({
          image: item.images[0].src,
          title: item.title,
          price: item.variants[0].price,
          category: item.category,
          description: item.descriptionHtml
        });
      });
      setProducts(_products);
    };
    fetchUsers();
  }, [token]);
  const handleSubmit = () => {
    console.log("Submitted");
  };
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };
  const componentVariants = state.variants.map(data => {
    return (
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <TextField
            label="Size"
            rowsMax="4"
            value={data.size}
            onChange={handleChange("size")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Color"
            rowsMax="4"
            value={data.color}
            onChange={handleChange("color")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Price"
            rowsMax="4"
            value={data.price}
            onChange={handleChange("price")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
      </Grid>
    );
  });
  return (
    <div className="kt_admin_products">
      <button
        type="button"
        className="btn btn-primary btn-upper btn-import"
        onClick={() => setOpenDialog(true)}
      >
        Add Product
      </button>
      <MUIDataTable
        title={"Products List"}
        data={products}
        columns={columns}
        options={options}
      />
      <Dialog
        open={open}
        aria-labelledby="draggable-dialog-title"
        onClose={() => setOpenDialog(false)}
        className="diag-add-product"
      >
        <DialogContent>
          <h3>Add Product</h3>
          <TextField
            id="standard-name"
            label="Title"
            className={classes.textField}
            value={state.title}
            onChange={handleChange("title")}
            margin="normal"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Description"
            multiline
            rowsMax="4"
            value={state.description}
            onChange={handleChange("description")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            label="Category"
            multiline
            rowsMax="4"
            value={state.category}
            onChange={handleChange("category")}
            className={classes.textField}
            margin="normal"
          />
          {componentVariants}
          <button
            type="button"
            className="btn btn-success btn-upper btn-add-variants"
            onClick={() => setOpenDialog(true)}
          >
            Add Variants
          </button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Confirm
          </Button>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductsListPage;
