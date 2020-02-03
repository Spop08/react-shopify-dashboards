import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./expansion.price.scss";
import { arrow_right } from "../icons/icons";

const useStyles = makeStyles(theme => ({
  expansion: {
    boxShadow: "none!important"
  }
}));

export default function ExpansionPrice() {
  const [expanded, setExpanded] = React.useState(false);
  const [price, setPrice] = React.useState("");
  const classes = useStyles();
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="expansion-category">
      <ExpansionPanel
        className={classes.expansion}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>Price</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl
            component="fieldset"
            //   className={classes.formControl}
          >
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              //   className={classes.group}
              value={price}
              onChange={event => setPrice(event.target.value)}
            >
              <FormControlLabel
                value="price1"
                control={<Radio />}
                label="Under $10"
              />
              <FormControlLabel
                value="price2"
                control={<Radio />}
                label="$10 to $25"
              />
              <FormControlLabel
                value="price3"
                control={<Radio />}
                label="$25 to $50"
              />
              <FormControlLabel
                value="price4"
                control={<Radio />}
                label="$50 & above"
              />
            </RadioGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
