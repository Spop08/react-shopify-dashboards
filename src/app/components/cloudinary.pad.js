import React, { useState, useEffect } from "react";
import { CloudinaryContext, Image } from "cloudinary-react";
import Button from "@material-ui/core/Button";
import "./cloudinary.pad.scss";
//Cloudinary(Image Upload) Pad Component
function App(props) {
  return (
    <CloudinaryContext cloudName="dzqbqfiug">
      <div className="App">
        <section>
          <Image
            key={props.image}
            publicId={props.image}
            fetch-format="auto"
            quality="auto"
            width={100}
            height={100}
          />
        </section>

        <Button
          variant="outlined"
          color="primary"
          onClick={props.beginUpload}
          style={{ height: "30px", width: "150px", marginLeft: "30px" }}
        >
          Import Image
        </Button>
      </div>
    </CloudinaryContext>
  );
}

export default App;
