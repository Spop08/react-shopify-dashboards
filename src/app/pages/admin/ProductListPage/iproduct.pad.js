import React, { useState } from "react";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "@material-ui/core/Button";
import CustomColumnTable from "./variants.table";
import ImagesTab from "../../../components/images.tab";
import PropTypes from "prop-types";
import "./iproduct.pad.scss";
import Slide from "@material-ui/core/Slide";
import { addToStore, editAdminProduct } from "../../../crud/product.crud";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const stateToHTML = require("draft-js-export-html").stateToHTML;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const useStyles = makeStyles({
  formControl: {
    "& .MuiInput-root": {
      width: "100%",
    },
  },
});
//Import Product Pad in Import Products Page
const IProductPad = ({ data, handleClose }) => {
  const blocksFromHTML = convertFromHTML(data.descriptionHtml);
  const contentState = ContentState.createFromBlockArray(blocksFromHTML);
  const token = useSelector((state) => state.auth.authToken);
  const classes = useStyles();
  const [state, setState] = useState({
    activeTab: "tab1",
    editorState: EditorState.createWithContent(contentState),
    import_open: false,
    delete_open: false,
  });
  const [title, setTitle] = useState(data.title);
  const [category, setCategory] = useState(data.category);
  const { activeTab, editorState, import_open, delete_open } = state;
  const [variants, setVariants] = useState(null);
  const [fields, setFields] = useState(null);

  //Handle Variants Change
  const handleVariantsChange = (variants, fields) => {
    setVariants(variants);
    setFields(fields);
  };
  //Submit function for editing product
  const handleSaveChanges = async () => {
    var newData = data;
    newData.title = title;
    newData.category = category;
    newData.descriptionHtml = stateToHTML(editorState.getCurrentContent());
    data.variants.forEach((item, index) => {
      newData.variants[index].imageSrc = variants[index].imageSrc;
      newData.variants[index].inventoryQuantity = variants[index].inventory;

      newData.variants[index].price = variants[index].price;
      newData.variants[index].originalPrice = variants[index].originalPrice;
      fields.forEach((field, ind) => {
        newData.variants[index]["options"][ind] = variants[index][field];
      });
    });
    console.log(newData);
    const response = await editAdminProduct(token, newData);
    console.log(response);
    if (response.data.status === "success") alert("Save Changed...");
    window.location.reload();
  };
  toast.configure({
    draggable: false,
    position: toast.POSITION.TOP_RIGHT,
  });
  return (
    <div className="kt-portlet">
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
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-9 kt-product-tab">
                <h5>Title:</h5>
                <input
                  className="form-control"
                  type="text"
                  placeholder=""
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <div className={classes.formControl}>
                  <h5>Category:</h5>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  >
                    <MenuItem value="Clothes">Clothes</MenuItem>
                    <MenuItem value="Toy">Toy</MenuItem>
                    <MenuItem value="Beauty & Health">Beauty & Health</MenuItem>
                    <MenuItem value="Watches">Watches</MenuItem>
                  </Select>
                </div>
                {/* <h5>Category:</h5>
                <input
                  className="form-control"
                  type="text"
                  placeholder=""
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                /> */}
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
              onEditorStateChange={(editorState) =>
                setState({ ...state, editorState })
              }
            />
          </div>
          <div
            className={"tab-pane " + (activeTab === "tab3" ? "active" : "")}
            role="tabpanel"
          >
            <CustomColumnTable
              data={data}
              handleVariantsChange={handleVariantsChange}
            />
          </div>
          <div
            className={"tab-pane " + (activeTab === "tab4" ? "active" : "")}
            role="tabpanel"
          >
            <ImagesTab images={data.images} />
          </div>
        </div>
      </div>
      <div className="btn-flex">
        <Button
          onClick={handleSaveChanges}
          color="primary"
          variant="outlined"
          className="btn-save-cancel"
        >
          Save Changes
        </Button>
        <Button
          onClick={handleClose}
          color="primary"
          variant="outlined"
          className="btn-save-cancel"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
IProductPad.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};
export default IProductPad;
