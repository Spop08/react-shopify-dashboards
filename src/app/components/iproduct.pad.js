import React, { Component } from "react";
import { EditorState } from "draft-js";
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

import "./iproduct.pad.scss";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default class IProductPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tab1",
      editorState: EditorState.createEmpty(),
      import_open: false,
      delete_open: false
    };
  }
  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };
  importOpen = () => {
    this.setState({ import_open: true });
  };
  importClose = () => {
    this.setState({ import_open: false });
  };
  deleteOpen = () => {
    this.setState({ delete_open: true });
  };
  deleteClose = () => {
    this.setState({ delete_open: false });
  };

  onTabChange = value => {
    this.setState({ activeTab: value });
  };
  render() {
    const { activeTab, editorState, import_open, delete_open } = this.state;

    return (
      <div className="kt-portlet">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Product 1</h3>
          </div>
        </div>
        <div className="kt-portlet__body">
          <ul className="nav nav-tabs " role="tablist">
            <li className="nav-item">
              <p
                className={"nav-link " + (activeTab === "tab1" ? "active" : "")}
                onClick={() => this.onTabChange("tab1")}
                data-toggle="tab"
                role="tab"
              >
                Product
              </p>
            </li>
            <li className="nav-item">
              <p
                className={"nav-link " + (activeTab === "tab2" ? "active" : "")}
                onClick={() => this.onTabChange("tab2")}
                data-toggle="tab"
                role="tab"
              >
                Description
              </p>
            </li>
            <li className="nav-item">
              <p
                className={"nav-link " + (activeTab === "tab3" ? "active" : "")}
                onClick={() => this.onTabChange("tab3")}
                data-toggle="tab"
                role="tab"
              >
                Variants
              </p>
            </li>
            <li className="nav-item">
              <p
                className={"nav-link " + (activeTab === "tab4" ? "active" : "")}
                onClick={() => this.onTabChange("tab4")}
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
                onClick={this.importOpen}
              >
                + Import to Store
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-elevate btn-circle btn-icon"
                onClick={this.deleteOpen}
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
                <div className="col-md-3">
                  <img
                    src="https://img.oberlo.com/?url=https://ae01.alicdn.com/kf/H9cff03171da44e5abc46e14fe36ec6b3u/MISSFOX-Diamond-Watch-For-Women-Luxury-Brand-Ladies-Gold-Square-Watch-Minimalist-Analog-Quartz-Movt-Unique.jpg"
                    className="tab-product-image"
                    alt="name"
                  />
                </div>
                <div className="col-md-9">
                  <h5>Original title:</h5>
                  <p>
                    MISSFOX Diamond Watch For Women Luxury Brand Ladies Gold
                    Square Watch Minimalist Analog Quartz Movt Unique Female
                    Iced Out Watch
                  </p>
                  <p>Title:</p>
                  <input className="form-control" type="text" placeholder="" />
                  <p>Collections:</p>
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
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
            <div
              className={"tab-pane " + (activeTab === "tab3" ? "active" : "")}
              role="tabpanel"
            >
              <CustomColumnTable />
            </div>
            <div
              className={"tab-pane " + (activeTab === "tab4" ? "active" : "")}
              role="tabpanel"
            >
              <ImagesTab />
            </div>
          </div>
        </div>
        <Dialog
          open={delete_open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.deleteClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Delete Product
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to delete this product?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.deleteClose} color="primary">
              No
            </Button>
            <Button onClick={this.deleteClose} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={import_open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.importClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Import Products
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to import this product to your shopify store?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.importClose} color="primary">
              No
            </Button>
            <Button onClick={this.importClose} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
