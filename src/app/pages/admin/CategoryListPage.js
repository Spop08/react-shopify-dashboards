import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { InputGroup, FormControl } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import {
  fetchAllCategories,
  addCategory,
  removeCategory,
} from "../../crud/category.crud";
import SellerToolbarSelect from "../../components/sellertoolbar";
import "./CategoryListPage.scss";

//Category List Page
const CategoryList = () => {
  //Define columns of table
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
      name: "title",
      label: "Title",
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
            <Tooltip title={"Delete"}>
              <IconButton onClick={() => handleDelete(tableMeta.rowIndex)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    customToolbarSelect: (selectedRows) => (
      <SellerToolbarSelect selectedRows={selectedRows} />
    ),
  };

  const token = useSelector((state) => state.auth.authToken);

  const [categories, setCategories] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedDel, setSelectedDel] = useState(null);
  const [category, setCategory] = useState("");
  //Fetch all user lists
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAllCategories(token);
      const categories = response.map((element, index) => ({
        ...element,
        no: index + 1,
      }));
      setCategories(categories);
    };
    fetchData();
  }, [token]);
  const handleDelete = (index) => {
    setOpenDelete(true);
    setSelectedDel(index);
  };
  const handleDeleteSubmit = async () => {
    const res = await removeCategory(token, categories[selectedDel]._id);
    if (res.status === "success")
      alert("Delete selected category successfully!");
    else alert("Error in deleting category!");
    window.location.reload();
  };
  const handleAddSubmit = async () => {
    const res = await addCategory(token, category);
    if (res.status === "success") alert("Created new category successfully!");
    else alert("Error in creating new category!");
    window.location.reload();
  };
  const changeCategory = (event) => {
    console.log(category);
    setCategory(event.target.value);
  };
  return (
    <>
      <div className="category-btn">
        <button
          type="button"
          className="btn btn-success btn-import"
          onClick={() => {
            setOpenAdd(true);
          }}
        >
          Create New Category
        </button>
      </div>
      <MUIDataTable
        title={"Category List"}
        data={categories}
        columns={columns}
        options={options}
      />
      <Dialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">Remove Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to remove this category?
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
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">Add Category</DialogTitle>
        <DialogContent>
          <InputGroup className="mb-3">
            <FormControl
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={changeCategory}
            />
          </InputGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddSubmit} color="primary">
            Submit
          </Button>
          <Button onClick={() => setOpenAdd(false)} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CategoryList;
