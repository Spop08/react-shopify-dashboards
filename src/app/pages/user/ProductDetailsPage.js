import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { fetchProductById } from "../../crud/product.crud";
import { useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { addToImport } from "../../crud/product.crud";
import { toast } from "react-toastify";
import "./ProductDetailsPage.scss";

const ProductDetailsPage = props => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [data, setData] = useState(null);
  const token = useSelector(state => state.auth.authToken);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const id = props.match.params.id;
      const data = await fetchProductById(token, id);
      setData(data);
    };
    fetchProduct();
  }, [token, props.match.params.id]);

  const handleSubmit = async () => {
    setOpenDialog(false);
    toast.success("Adding to the Import List");
    const res = await addToImport(token, data._id);
    console.log(res);
  };

  const componentDetails = () => {
    const sale_price = data.variants[0].salePrice;
    const origin_price = data.variants[0].price;
    const price = sale_price ? sale_price : origin_price;
    const off_rate = Math.floor(
      ((parseFloat(origin_price) - parseFloat(sale_price)) /
        parseFloat(origin_price)) *
        100
    );
    const images = data.images.map((item, index) => (
      <div
        className={"expansion__pic" + (index === selectedImg ? " show" : "")}
        key={index}
        onClick={() => setSelectedImg(index)}
      >
        <img alt="" className="expansion__img" src={item.src} />
      </div>
    ));
    return (
      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-md-1">{images}</div>
            <div className="col-md-5">
              <div className="d-flex">
                <img
                  alt=""
                  className="expansion__feature_img"
                  src={data.images[selectedImg].src}
                />
              </div>
            </div>
            <div className="col-md-6">
              <p className="product-title">{data.title}</p>

              <Button
                variant="success"
                className="btn-import"
                onClick={() => setOpenDialog(true)}
              >
                + Add to Import List
              </Button>
              <hr></hr>
              <div className="row ct-list">
                <div className="col-md-3">Price</div>
                <div className="col-md-9">
                  <span className="badge-price">US ${price}</span>
                  {sale_price && (
                    <span className="badge-discount">{off_rate}% off</span>
                  )}
                </div>
              </div>
              <div className="row ct-list">
                <div className="col-md-3">Color</div>
                <div className="col-md-9">
                  <label className="badge-color">Sucker</label>
                  <label className="badge-color">
                    Custom Built Contact Customer Service
                  </label>
                  <label className="badge-color">Gooseneck</label>
                  <label className="badge-color">Extendable Desktop</label>
                </div>
              </div>

              <div className="row ct-list">
                <div className="col-md-3">Size</div>
                <div className="col-md-9">
                  <label className="badge-color">onesize 2</label>
                  <label className="badge-color">onesize 3</label>
                  <label className="badge-color">onesize</label>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  };
  const componentStatistics = () => {
    return (
      <Card className="ct-statistics">
        <Card.Header>Product Statistics</Card.Header>
        <Card.Body>
          <div className="row">
            {/* <div className="col-md-2 ">
              <div className="product-card__reviews">
                <div>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <label className="product-card__reviews-count">(2)</label>
              </div>
              <p className="product-statistics__icon">
                2 reviews on Aliexpress
              </p>
              <a className="text-link" href="/">
                Read Reviews
              </a>
            </div> */}

            <div className="col-md-4">
              <p className="product-statistics__title">Imports</p>
              <div className="d-flex product-statistics__icon">
                <i className="flaticon2-plus" />
                <p>{data.addedCount}</p>
              </div>
              <p className="product-statistics__desc">
                This product has been added to {data.addedCount} UDS stores
              </p>
            </div>

            <div className="col-md-4">
              <p className="product-statistics__title">Pageviews</p>
              <div className="d-flex product-statistics__icon">
                <i className="flaticon-eye" />
                <p>{data.importedCount}</p>
              </div>
              <p className="product-statistics__desc">
                This product was viewed {data.importedCount} times across all
                Shopify stores
              </p>
            </div>

            <div className="col-md-4">
              <p className="product-statistics__title">Orders</p>
              <div className="d-flex product-statistics__icon">
                <i className="flaticon2-delivery-truck" />
                <p>{data.soldCount}</p>
              </div>
              <p className="product-statistics__desc">
                This product has been ordered through UDS and/or AliExpress{" "}
                {data.soldCount}
                times.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  };
  return (
    <div className="kproduct-container container-details">
      {data && (
        <div>
          <h3 className="page-title">Product Details</h3>
          {componentDetails()}
          {componentStatistics()}
        </div>
      )}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">
          Add to Import List
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to add this product to your import list?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            No
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ProductDetailsPage;
