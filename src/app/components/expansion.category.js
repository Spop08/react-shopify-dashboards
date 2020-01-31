import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./expansion.category.scss";
import arrow_right from "../icons/icons";

export default function ExpansionCategory() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ExpansionPanel
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography>Category</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <button class="filter-category__item">
          Accessories
          <arrow_right />
        </button>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
