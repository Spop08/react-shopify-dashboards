import React, { useState, useEffect } from "react";
import { CloudinaryContext, Image } from "cloudinary-react";
import { openUploadWidget } from "./CloudinaryService";

function App() {
  const [image, setImage] = useState("");

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "dzqbqfiug",
      tags: [tag, "anImage"],
      uploadPreset: "ml_default",
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === "success") {
          console.log("I am URL:!!!!!!!!!", photos.info.url);
          setImage(photos.info.public_id);
        }
      } else {
        console.log(error);
      }
    });
  };

  return (
    <CloudinaryContext cloudName="dzqbqfiug">
      <div className="App">
        <button onClick={() => beginUpload("image")}>Upload Image</button>
        <section>
          <Image
            key={image}
            publicId={image}
            fetch-format="auto"
            quality="auto"
            width={30}
            height={30}
          />
        </section>
      </div>
    </CloudinaryContext>
  );
}

export default App;
