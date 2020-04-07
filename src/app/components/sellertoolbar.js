import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterIcon from "@material-ui/icons/FilterList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  iconButton: {
    marginRight: "24px",
    top: "50%",
    display: "inline-block",
    position: "relative",
  },
  deleteIcon: {
    color: "#000",
  },
});
//SellerToolBarSelect with Icons
const SellerToolbarSelect = ({ selectedRows }) => {
  const classes = useStyles();
  const handleUpdate = () => {};
  const handleDelete = () => {
    console.log("Delete clicked", selectedRows);
  };

  return (
    <div className={"custom-toolbar-select"}>
      <Tooltip title={"Filter"}>
        <IconButton className={classes.iconButton} onClick={handleUpdate}>
          <FilterIcon className={classes.deleteIcon} />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Delete"}>
        <IconButton className={classes.iconButton} onClick={handleDelete}>
          <DeleteIcon className={classes.deleteIcon} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default SellerToolbarSelect;
