import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterIcon from "@material-ui/icons/FilterList";
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarSelectStyles = {
  iconButton: {
    marginRight: "24px",
    top: "50%",
    display: "inline-block",
    position: "relative",
  },
  deleteIcon: {
    color: "#000"
  }
};

class SellerToolbarSelect extends React.Component {
  handleClick = () => {
    console.log("click! current selected rows", this.props.selectedRows);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={"custom-toolbar-select"}>
        <Tooltip title={"Filter"}>
          <IconButton className={classes.iconButton} onClick={this.handleClick}>
            <FilterIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Delete"}>
          <IconButton className={classes.iconButton} onClick={this.handleClick}>
            <DeleteIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, {
  name: "SellerToolbarSelect"
})(SellerToolbarSelect);
