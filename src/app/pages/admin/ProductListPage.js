import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fetchAllProducts, addProductToAdmin } from "../../crud/product.crud";
import SellerToolbarSelect from "../../components/sellertoolbar";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import { TextField, Grid } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import ChipInput from "material-ui-chip-input";
import Divider from "@material-ui/core/Divider";

import "./ProductListPage.scss";

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: "10px",
    width: "100%",
    flexShrink: "initial"
  }
}));

function getSteps() {
  return ["Product Information", "Variants Information"];
}
const initialVariant = {
  title: "",
  descriptionHtml: "",
  images: [
    {
      src:
        "https://ae01.alicdn.com/kf/H2f7bb42f4a80404c8b16ab9da4790fd4Z/2020-Men-Tee-Shirt-V-neck-Long-Sleeve-Tee-Tops-Stylish-Slim-Buttons-T-shirt-Autumn.jpg"
    },
    {
      src:
        "https://ae01.alicdn.com/kf/Hdeed4e7e3a7d4aae83a4df471f6d22d6F/2020-Men-Tee-Shirt-V-neck-Long-Sleeve-Tee-Tops-Stylish-Slim-Buttons-T-shirt-Autumn.jpg"
    }
  ],
  category: "",
  options: ["Color", "Size"],
  onSale: false,
  variants: []
};
const ProductsListPage = () => {
  const classes = useStyles();
  const token = useSelector(state => state.auth.authToken);
  const [open, setOpenDialog] = useState(false);
  const [products, setProducts] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [state, setState] = useState(initialVariant);
  function handleAddChip(chip) {
    const types = [...state.options];
    types.push(chip);
    setState({ ...state, options: types });
  }
  function handleDeleteChip() {}
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
          image: item.images[0]
            ? item.images[0].src
            : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1902/pavelstasevich190200120/124934975-stock-vector-no-image-available-icon-vector-flat.jpg?ver=6",
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

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };
  const changeVariant = (name, index) => event => {
    var variants = [...state.variants];
    variants[index][name] = event.target.value;
    setState({ ...state, variants });
  };
  const changeOption = (vindex, tindex) => event => {
    var variants = [...state.variants];
    variants[vindex]["options"][tindex] = event.target.value;
    setState({ ...state, variants });
  };

  const componentVariants = state.variants.map((item, vindex) => {
    return (
      <Grid container spacing={4}>
        {state.options.map((type, tindex) => {
          return (
            <Grid container item xs={3} key={type + tindex}>
              <TextField
                label={type}
                onChange={changeOption(vindex, tindex)}
                className={classes.textField}
                margin="normal"
              />
            </Grid>
          );
        })}
        <Grid container item xs={3}>
          <TextField
            label="Price"
            onChange={changeVariant("price", vindex)}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid container item xs={3}>
          <TextField
            label="SalePrice"
            onChange={changeVariant("salePrice", vindex)}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
    );
  });

  function addVariant(type = true) {
    var variant = {
      price: 0,
      salePrice: 0,
      options: [],
      imageSrc:
        "https://ae01.alicdn.com/kf/Ha82cab4f1aac4d66b8ecd61f12f5c3c47/2020-Men-Tee-Shirt-V-neck-Long-Sleeve-Tee-Tops-Stylish-Slim-Buttons-T-shirt-Autumn.jpg"
    };
    state.options.forEach((item, index) => {
      variant["options"][index] = "";
    });
    var variants = [];
    if (type) variants = [...state.variants];
    variants.push(variant);
    setState({ ...state, variants });
  }

  async function handleNext() {
    if (activeStep === 0) {
      addVariant(false);
      setActiveStep(1);
    }
    if (activeStep === 1) {
      const res = await addProductToAdmin(token, state);
      if (res.data.status === "success") {
        setOpenDialog(false);
        alert("Successfully Imported");
        window.location.reload(false);
      } else {
        alert("Error Importing...");
      }
    }
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }
  console.log("I am state", state);
  return (
    <div className="kt_admin_products">
      <button
        type="button"
        className="btn btn-primary btn-upper btn-import"
        onClick={() => {
          setState(initialVariant);
          setOpenDialog(true);
        }}
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
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === 0 ? (
            <div>
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
                value={state.descriptionHtml}
                onChange={handleChange("descriptionHtml")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                label="Category"
                value={state.category}
                onChange={handleChange("category")}
                className={classes.textField}
                margin="normal"
              />

              <ChipInput
                label="Variant Types"
                value={state.options}
                onAdd={chip => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
                margin="normal"
              />
            </div>
          ) : (
            <div className="ct-variants">
              {componentVariants}
              <button
                type="button"
                className="btn btn-success btn-upper btn-add-variants"
                onClick={addVariant}
              >
                Add Variant
              </button>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductsListPage;
