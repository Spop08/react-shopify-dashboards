import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./expansion.category.scss";
import { arrow_right } from "../icons/icons";

const useStyles = makeStyles(theme => ({
  expansion: {
    boxShadow: "none!important"
  }
}));

export default function ExpansionCategory() {
  const [expanded, setExpanded] = React.useState("panel2");
  const classes = useStyles();
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="expansion-category">
      <ExpansionPanel
        className={classes.expansion}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>Category</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <button class="filter-category__item active">
            Accessories
            {arrow_right()}
          </button>
          <button class="filter-category__item">
            Belts
            {arrow_right()}
          </button>
          <button class="filter-category__item">
            Eyewear
            {arrow_right()}
          </button>
          <button class="filter-category__item">
            Gloves & Mittens
            {arrow_right()}
          </button>
          <button class="filter-category__item">
            Hats & Caps
            {arrow_right()}
          </button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
