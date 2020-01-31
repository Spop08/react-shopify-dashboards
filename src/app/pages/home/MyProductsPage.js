import React from "react";
import ControlledExpansionPanels from "../../components/expansion.pad";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function MyProductsPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3 className="page-title">My Products</h3>
      <div className="kproduct-container">
        <ControlledExpansionPanels />
        <ControlledExpansionPanels />
        <ControlledExpansionPanels />
        <ControlledExpansionPanels />
      </div>
    </div>
  );
}
