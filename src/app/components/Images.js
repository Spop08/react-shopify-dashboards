import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// Images for Cloudinary in Admin Creating Product Page
export default (props) =>
  props.images.map((image, i) => (
    <div key={i} className="fadein">
      <div
        onClick={() => props.removeImage(image.public_id)}
        className="delete"
      >
        <FontAwesomeIcon icon={faTimesCircle} size="2x" />
      </div>
      <img src={image.secure_url} alt="" />
    </div>
  ));
