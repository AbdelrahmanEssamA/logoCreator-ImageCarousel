import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Carousel from "react-elastic-carousel";
import Axios from "axios";

function ImageCarousel() {
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));

      const files = Array.from(e.target.files).map((file) => uploadImage(file));
    }
  };
  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "zo5qtaph");
    Axios.post(
      "https://api.cloudinary.com/v1_1/drpsqkojb/image/upload",
      formData
    ).then((response) => {
      console.log(response);
    });
  };
  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <Grid item xs={12} key={photo}>
          <img
            src={photo}
            alt="albumPhoto"
            key={photo}
            className="imageSlide"
          />
        </Grid>
      );
    });
  };
  return (
    <div className="app">
      <Grid container className="content">
        <Grid item xs={12}>
          <Typography align="center" variant="h2">
            Image Carousel
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            className="inputHide"
            type="file"
            id="file"
            multiple
            onChange={handleImageChange}
          />

          <div>
            <label htmlFor="file">
              <IconButton
                color="secondary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera fontSize="large" />
              </IconButton>
            </label>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Carousel>{renderPhotos(selectedFiles)}</Carousel>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImageCarousel;
