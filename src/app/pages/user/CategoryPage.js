import React, { useState, useEffect } from "react";
import SProductPad from "../../components/sproduct.pad";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "react-bootstrap";
import ExpansionCategory from "../../components/expansion.category";
import ExpansionPrice from "../../components/expansion.price";
import "./CategoryPage.scss";
import { fetchProductsByCategory } from "../../crud/product.crud";
import { useSelector } from "react-redux";

const CategoryPage = props => {
  const [openDialog, setOpenDialog] = useState(false);
  const token = useSelector(state => state.auth.authToken);
  const [products, loadProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { type } = props.match.params;
      const products = await fetchProductsByCategory(token, type);
      loadProducts(products);
    };
    fetchProducts();
  }, [token, props.match.params]);

  console.log(products);
  const componentProducts = products.map((data, index) => (
    <div className="col-md-12 col-lg-6 col-xl-3" key={index}>
      <SProductPad data={data} />
    </div>
  ));

  return (
    <div className="category-page">
      <h3 className="page-title">Search Products</h3>
      <div className="row">
        <div className="col-md-3 container-expansion">
          <ExpansionCategory />
          <ExpansionPrice />
        </div>
        <div className="col-md-9">
          <div className="container-import">
            <button
              type="button"
              className="btn btn-secondary btn-wide btn-import"
              onClick={() => setOpenDialog(true)}
            >
              Import product by URL or ID
            </button>
          </div>
          <div className="row">{componentProducts}</div>
        </div>
      </div>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Add to Import List
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to add this product to your import list?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Yes
          </Button>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CategoryPage;
