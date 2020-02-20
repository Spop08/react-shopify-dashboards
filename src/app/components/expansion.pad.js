import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./expansion.pad.scss";

const useStyles = makeStyles({
  expansion: {
    boxShadow: "none!important"
  }
});
export default function ExpansionPad({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="expansion-pad">
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.expansion}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="kt-widget5">
            <div className="kt-widget5__item ">
              <div className="kt-widget5__content">
                <div className="kt-widget5__pic">
                  <img
                    alt=""
                    className="kt-widget7__img"
                    src="https://ae01.alicdn.com/kf/H170b706c280948f18fad2a4a8dd6cfc3P/2019-Winter-Shoes-Men-Warm-Boots-Men-Fur-High-Quality-Split-Leather-Wterproof-Ankle-Snow-Boots.jpg"
                  />
                </div>
                <div className="kt-widget5__section">
                  <h5>{data.title}</h5>

                  <p className="kt-widget5__desc">by UDS Dropshipping</p>
                </div>
              </div>
              <div className="kt-widget5__content">
                <div className="kt-widget5__stats">
                  <span className="kt-widget5__sales">
                    Shopify Price:US$143.72
                  </span>
                  <span className="kt-widget5__sales">Cost:US$70.70</span>
                </div>
              </div>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <div className="expansion__title">
              {/* <div className="product-card__reviews">
                <div>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <label className="product-card__reviews-count">(2)</label>
              </div> */}
              <Typography>
                Elegant Ball Gown Pearls Embroidered Flowers Long Evening Dress
                Party Masquerade Solo Performance Host Dress Robe De Soiree 40
                (VLNUO NISA . Store (AliExpress))
              </Typography>
            </div>
            <div className="row ">
              <div className="expansion__pic">
                <img
                  alt=""
                  className="expansion__img"
                  src="https://ae01.alicdn.com/kf/H8cb212f003164fb5b9137e0d7efc0a38Q/2019-Winter-Shoes-Men-Warm-Boots-Men-Fur-High-Quality-Split-Leather-Wterproof-Ankle-Snow-Boots.jpg_640x640.jpg"
                />
              </div>
              <div className="expansion__pic">
                <img
                  alt=""
                  className="expansion__img"
                  src="https://ae01.alicdn.com/kf/H5b0fce4ca87443499482d4f62637b96eS/2019-Winter-Shoes-Men-Warm-Boots-Men-Fur-High-Quality-Split-Leather-Wterproof-Ankle-Snow-Boots.jpg_640x640.jpg"
                />
              </div>
              <div className="expansion__pic">
                <img
                  alt=""
                  className="expansion__img"
                  src="https://ae01.alicdn.com/kf/H170b706c280948f18fad2a4a8dd6cfc3P/2019-Winter-Shoes-Men-Warm-Boots-Men-Fur-High-Quality-Split-Leather-Wterproof-Ankle-Snow-Boots.jpg"
                />
              </div>
            </div>
            <div
              className="expansion__desc"
              dangerouslySetInnerHTML={{ __html: data.descriptionHtml }}
            ></div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
