import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./expansion.pad.scss";

const useStyles = makeStyles({
  expansion: {
    boxShadow: "none!important",
  },
});
//Expansion Pad in Product Page
export default function ExpansionPad({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const handleChange = (panel) => (event, isExpanded) => {
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
                <div className="kt-ewidget-pic d-flex">
                  <img
                    alt=""
                    src={
                      data.images[0]
                        ? data.images[0].src
                        : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1902/pavelstasevich190200120/124934975-stock-vector-no-image-available-icon-vector-flat.jpg?ver=6"
                    }
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
                    Shopify Price:US${data.variants[0].price * 2}
                  </span>
                  <span className="kt-widget5__sales">
                    Cost:US${data.variants[0].price}
                  </span>
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
              {/* <Typography>{data.descriptionHtml}</Typography> */}
            </div>
            <div className="row ">
              <div className="expansion__pic">
                <img
                  alt=""
                  className="expansion__img"
                  src={
                    data.images[0]
                      ? data.images[0].src
                      : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1902/pavelstasevich190200120/124934975-stock-vector-no-image-available-icon-vector-flat.jpg?ver=6"
                  }
                />
              </div>
              {data.images[1] && (
                <div className="expansion__pic">
                  <img
                    alt=""
                    className="expansion__img"
                    src={data.images[1].src ? data.images[1].src : ""}
                  />
                </div>
              )}
              {data.images[2] && (
                <div className="expansion__pic">
                  <img
                    alt=""
                    className="expansion__img"
                    src={data.images[2].src}
                  />
                </div>
              )}
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
