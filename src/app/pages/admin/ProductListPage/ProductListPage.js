import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  fetchAllProducts,
  addProductToAdmin,
  removeAdminProduct,
  addAdminAliProduct,
} from "../../../crud/product.crud";
import SellerToolbarSelect from "../../../components/sellertoolbar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import { TextField, Grid } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import ChipInput from "material-ui-chip-input";
import Divider from "@material-ui/core/Divider";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CloudinaryPad from "../../../components/cloudinary.pad";
import { openUploadWidget } from "../../../crud/CloudinaryService";
import { Modal, InputGroup, FormControl } from "react-bootstrap";
import "./ProductListPage.scss";
import IProductPad from "./iproduct.pad";
import { mock } from "./mock";

//Customize Material UI styles
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: "10px",
    width: "100%",
    flexShrink: "initial",
  },
  largeDialog: {
    "& .MuiPaper-root": {
      width: 1280,
      maxWidth: 1280,
    },
  },
  formControl: {
    "& .MuiInput-root": {
      width: "100%",
    },
  },
}));
//Steps for creating products
function getSteps() {
  return ["Product Information", "Variants Information"];
}
//Initial variant for new product
const initialVariant = {
  title: "",
  descriptionHtml: "",
  images: [],
  category: "",
  options: ["Color", "Size"],
  onSale: false,
  variants: [],
};
//Product List Page(Show the products and create new self products in this page)
const ProductsListPage = () => {
  const classes = useStyles();
  const token = useSelector((state) => state.auth.authToken);
  const [open, setOpenDialog] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [originProducts, setOriginProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [delIndex, setDelIndex] = useState();
  const [editIndex, setEditIndex] = useState();
  const steps = getSteps();
  const [state, setState] = useState(initialVariant);
  const [openAli, setOpenAli] = useState(false);
  const [aliID, setAliID] = useState(false);
  const [aliURL, setAliURL] = useState(false);
  const handleCloseAli = () => {
    setOpenAli(false);
  };
  //AliID change function
  const changeAliID = (event) => {
    setAliID(event.target.value);
  };
  //AliURL change function
  const changeAliURL = (event) => {
    setAliURL(event.target.value);
  };
  const handleImport = async () => {
    let id;
    if (aliURL) {
      const URI = aliURL.split("/")[4];
      id = URI.split(".html?")[0];
    } else id = aliID;
    const res = await addAdminAliProduct(token, id);
    if (res.status === "success") {
      alert("Aliexpress Product Imported Successfully!");
    } else alert("failed");
    window.location.reload();
  };
  //Add new variant function
  function handleAddChip(chip) {
    const types = [...state.options];
    types.push(chip);
    setState({ ...state, options: types });
  }
  //Delete variant function
  function handleDeleteChip(chip, index) {
    console.log(index);
    const types = [...state.options];
    types.splice(index, 1);
    setState({ ...state, options: types });
    console.log("Delete button clicked");
  }
  //Delete function for product
  function handleDelete(index) {
    setDelIndex(index);
    setOpenDelete(true);
  }
  function handleEditOpen(index) {
    setEditIndex(index);
    setOpenEdit(true);
  }
  //Delete company product
  async function handleDeleteSubmit() {
    setOpenDelete(false);
    const response = await removeAdminProduct(token, {
      id: originProducts[delIndex]._id,
    });
    if (response.data.status === "success") {
      alert("Successfully Deleted...");
      window.location.reload();
    }
  }
  //Checkbox component
  const options = {
    filterType: "checkbox",
    customToolbarSelect: (selectedRows) => (
      <SellerToolbarSelect selectedRows={selectedRows} />
    ),
  };
  //Columns of Table
  const columns = [
    {
      name: "no",
      label: "No",
      options: {
        filter: true,
        sort: true,
      },
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
        },
      },
    },
    {
      name: "title",
      label: "Title",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "category",
      label: "Category",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "description",
      label: "Description",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>
              <Tooltip title={"Edit"}>
                <IconButton onClick={() => handleEditOpen(tableMeta.rowIndex)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Delete"}>
                <IconButton onClick={() => handleDelete(tableMeta.rowIndex)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          );
        },
      },
    },
  ];
  //fetch all product details
  useEffect(() => {
    const fetchUsers = async () => {
      const products = await fetchAllProducts(token);
      console.log("FIRST PRODUCTS", products);
      var _products = [];
      products.map((item) => {
        return _products.push({
          image: item.images[0]
            ? item.images[0].src
            : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1902/pavelstasevich190200120/124934975-stock-vector-no-image-available-icon-vector-flat.jpg?ver=6",
          title: item.title,
          price: item.variants[0].price,
          category: item.category,
          description: item.descriptionHtml,
        });
      });
      setProducts(_products);
      setOriginProducts(products);
    };
    fetchUsers();
  }, [token]);

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  //Change variant function
  const changeVariant = (name, index) => (event) => {
    var variants = [...state.variants];
    variants[index][name] = event.target.value;
    setState({ ...state, variants });
  };
  //Change option function
  const changeOption = (vindex, tindex) => (event) => {
    var variants = [...state.variants];
    variants[vindex]["options"][tindex] = event.target.value;
    setState({ ...state, variants });
  };
  //Upload with Cloudinary
  const beginUpload = (index) => {
    const uploadOptions = {
      cloudName: "dzqbqfiug",
      tags: ["image", "anImage"],
      uploadPreset: "ml_default",
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === "success") {
          var variants = [...state.variants];
          variants[index]["imageSrc"] = photos.info.url;
          var images = [...state.images];
          images[index] = { src: photos.info.url };
          setState({ ...state, variants, images });
        }
      } else {
        console.log(error);
      }
    });
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
        <Grid container item xs={3}>
          <TextField
            label="Quantity"
            onChange={changeVariant("inventoryQuantity", vindex)}
            className={classes.textField}
            margin="normal"
            type="number"
          />
        </Grid>
        <Grid container item xs={3}>
          <CloudinaryPad
            beginUpload={() => beginUpload(vindex)}
            image={item.imageSrc}
          />
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
    );
  });
  //Add variant
  function addVariant(type = true) {
    var variant = {
      price: 0,
      salePrice: 0,
      options: [],
      imageSrc: "",
      inventoryQuantity: 0,
    };
    state.options.forEach((item, index) => {
      variant["options"][index] = "";
    });
    var variants = [];
    if (type) variants = [...state.variants];
    variants.push(variant);
    setState({ ...state, variants });
  }
  //Set activeStep to next step
  async function handleNext() {
    if (activeStep === 0) {
      addVariant(false);
      setActiveStep(1);
    }
    if (activeStep === 1) {
      const res = await addProductToAdmin(token, state);
      if (res.data.status === "success") {
        alert("Successfully Imported");
        window.location.reload(false);
      } else {
        alert("Error Importing...");
      }
      setOpenDialog(false);
    }
  }
  //Set activeStep to prev state
  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }
  console.log("I am STATE", state.category);
  return (
    <div className="kt_admin_products">
      <div className="kt-buttons-group">
        <button
          type="button"
          className="btn btn-primary btn-import"
          onClick={() => {
            setState(initialVariant);
            setOpenDialog(true);
            setActiveStep(0);
          }}
        >
          Add Product
        </button>
        <button
          type="button"
          className="btn btn-success btn-import"
          onClick={() => {
            setOpenAli(true);
          }}
        >
          Import Aliexpress Product
        </button>
      </div>
      <MUIDataTable
        title={"Products List"}
        data={products}
        columns={columns}
        options={options}
      />
      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        aria-labelledby="draggable-dialog-title12"
        fullWidth={1280}
        className={classes.largeDialog}
      >
        <DialogTitle id="draggable-dialog-title">Edit Product</DialogTitle>
        <DialogContent>
          <IProductPad
            data={originProducts[editIndex]}
            handleClose={() => setOpenEdit(false)}
          />
        </DialogContent>
      </Dialog>

      <Dialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">Remove Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to remove this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteSubmit} color="primary">
            Yes
          </Button>
          <Button onClick={() => setOpenDelete(false)} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open}
        aria-labelledby="draggable-dialog-title"
        onClose={() => setOpenDialog(false)}
        className="diag-add-product"
      >
        <DialogContent>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
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
              <div className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={state.category}
                  onChange={handleChange("category")}
                >
                  <MenuItem value="Clothes">Clothes</MenuItem>
                  <MenuItem value="Toy">Toy</MenuItem>
                  <MenuItem value="Beauty & Health">Beauty & Health</MenuItem>
                  <MenuItem value="Watches">Watches</MenuItem>
                </Select>
              </div>
              {/* <TextField
                label="Category"
                value={state.category}
                onChange={handleChange("category")}
                className={classes.textField}
                margin="normal"
              /> */}

              <ChipInput
                label="Variant Types"
                value={state.options}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
                margin="normal"
              />
            </div>
          ) : (
            <div className="ct-variants">
              {componentVariants}
              <button
                type="button"
                className="btn btn-success btn-add-variants"
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
      <Modal show={openAli} onHide={handleCloseAli}>
        <Modal.Header closeButton>
          <Modal.Title>Import AliExpress Product by URL or ID</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="basic-url">Product URL</label>
          <InputGroup className="mb-3">
            <FormControl
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={changeAliURL}
            />
          </InputGroup>
          <p>Or</p>
          <label htmlFor="basic-url">Product ID</label>
          <InputGroup className="mb-3">
            <FormControl
              id="basic-id"
              aria-describedby="basic-addon3"
              onChange={changeAliID}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="primary"
            variant="contained"
            onClick={handleImport}
            className="btn-import-close"
          >
            Import
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleCloseAli}
            className="btn-import-close"
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductsListPage;
