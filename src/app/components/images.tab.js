import React from "react";
import PropTypes from "prop-types";
import "./images.tab.scss";

const ImagesTab = ({ images }) => {
  const componentsImage = images.map((item, index) => (
    <div className="col-md-3" key={index}>
      <div className="image-container d-flex">
        <img alt="" src={item.src} />
      </div>
    </div>
  ));
  console.log(images);
  return <div className="row images-tab">{componentsImage}</div>;
};

ImagesTab.propTypes = {
  images: PropTypes.array
};
export default ImagesTab;
