import React, { useState } from "react";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CustomColumnTable from "./variants.table";
import ImagesTab from "./images.tab";
import PropTypes from "prop-types";
import "./iproduct.pad.scss";
import Slide from "@material-ui/core/Slide";
import { addToStore } from "../crud/product.crud";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const IProductPad = ({ data, index }) => {
  const blocksFromHTML = convertFromHTML(data.descriptionHtml);
  const contentState = ContentState.createFromBlockArray(blocksFromHTML);
  const token = useSelector(state => state.auth.authToken);

  const [state, setState] = useState({
    activeTab: "tab1",
    editorState: EditorState.createWithContent(contentState),
    import_open: false,
    delete_open: false
  });
  const [title, setTitle] = useState(data.title);
  const { activeTab, editorState, import_open, delete_open } = state;
  const handleDelete = () => {};
  const handleSubmit = () => {
    addToStore(token, data.id);
    setState({ ...state, import_open: false });
    toast.success("Product is adding to Store...", 3000);
  };
  toast.configure({
    draggable: false,
    position: toast.POSITION.TOP_RIGHT
  });
  return (
    <div className="kt-portlet">
      <div className="kt-portlet__head">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title">Product {index}</h3>
        </div>
      </div>
      <div className="kt-portlet__body">
        <ul className="nav nav-tabs " role="tablist">
          <li className="nav-item">
            <p
              className={"nav-link " + (activeTab === "tab1" ? "active" : "")}
              onClick={() => setState({ ...state, activeTab: "tab1" })}
              data-toggle="tab"
              role="tab"
            >
              Product
            </p>
          </li>
          <li className="nav-item">
            <p
              className={"nav-link " + (activeTab === "tab2" ? "active" : "")}
              onClick={() => setState({ ...state, activeTab: "tab2" })}
              data-toggle="tab"
              role="tab"
            >
              Description
            </p>
          </li>
          <li className="nav-item">
            <p
              className={"nav-link " + (activeTab === "tab3" ? "active" : "")}
              onClick={() => setState({ ...state, activeTab: "tab3" })}
              data-toggle="tab"
              role="tab"
            >
              Variants
            </p>
          </li>
          <li className="nav-item">
            <p
              className={"nav-link " + (activeTab === "tab4" ? "active" : "")}
              onClick={() => setState({ ...state, activeTab: "tab4" })}
              data-toggle="tab"
              role="tab"
            >
              Images
            </p>
          </li>
          <li className="nav-item btn-import">
            <button
              type="button"
              className="btn btn-brand btn-elevate btn-pill"
              onClick={() => setState({ ...state, import_open: true })}
            >
              + Import to Store
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-elevate btn-circle btn-icon"
              onClick={() => setState({ ...state, delete_open: true })}
            >
              <i className="flaticon-delete"></i>
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className={"tab-pane " + (activeTab === "tab1" ? "active" : "")}
            role="tabpanel"
          >
            <div className="row">
              <div className="col-md-3 d-flex">
                <img
                  src={
                    data.images[0]
                      ? data.images[0].src
                      : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1902/pavelstasevich190200120/124934975-stock-vector-no-image-available-icon-vector-flat.jpg?ver=6"
                  }
                  className="tab-product-image"
                  alt="name"
                />
              </div>
              <div className="col-md-9 kt-product-tab">
                <h5>Original title:</h5>
                <p>{data.title}</p>
                <h5>Title:</h5>
                <input
                  className="form-control"
                  type="text"
                  placeholder=""
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                />
                <h5>Collections:</h5>
                <input className="form-control" type="text" placeholder="" />
              </div>
            </div>
          </div>
          <div
            className={"tab-pane " + (activeTab === "tab2" ? "active" : "")}
            role="tabpanel"
          >
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={editorState =>
                setState({ ...state, editorState })
              }
            />
          </div>
          <div
            className={"tab-pane " + (activeTab === "tab3" ? "active" : "")}
            role="tabpanel"
          >
            <CustomColumnTable data={data} />
          </div>
          <div
            className={"tab-pane " + (activeTab === "tab4" ? "active" : "")}
            role="tabpanel"
          >
            <ImagesTab images={data.images} />
          </div>
        </div>
      </div>
      <Dialog
        open={delete_open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setState({ ...state, delete_open: false })}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="draggable-dialog-title">Delete Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="primary">
            Yes
          </Button>
          <Button
            onClick={() => setState({ ...state, delete_open: false })}
            color="primary"
          >
            No
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={import_open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setState({ ...state, import_open: false })}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="draggable-dialog-title">Import Products</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to import this product to your shopify store?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Yes
          </Button>
          <Button
            onClick={() => setState({ ...state, import_open: false })}
            color="primary"
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
IProductPad.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number
};
export default IProductPad;
