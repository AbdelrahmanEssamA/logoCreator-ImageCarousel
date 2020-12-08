import React from "react";
import {
  Paper,
  Grid,
  Typography,
  IconButton,
  Divider,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { TwitterPicker } from "react-color";
import frame from "../photos/frame.png";
function LogoEditor() {
  const useStyles = makeStyles((theme) => ({
    PhotoCamera: {
      margin: "auto",
    },
    Grid: {
      textAlign: "center",
    },
    input: {
      display: "none",
    },
    Paper: {
      width: "80%",
      margin: "auto",
      padding: theme.spacing(4),
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    imageContainer: {
      padding: theme.spacing(3),
      maxWidth: "100%",
      position: "relative",
      overflow: "hidden",
      borderRadius: "5px",

      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
      border: "solid 2px",
      textAlign: "center",
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "98%",
      border: "1px solid black",
    },
    TextField: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
    Title: {
      marginBottom: theme.spacing(3),
    },
    TwitterPicker: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    Heading: {
      marginBottom: theme.spacing(3),
      backgroundColor: "#4287f5",
      borderRadius: "6px",
      padding: theme.spacing(2),
      color: "white",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160,
      marginBottom: theme.spacing(3),
    },
    Button: {
      marginTop: theme.spacing(1),
    },
  }));

  const [image, setImage] = React.useState(
    "https://www.dhoumm.co/cdn-k1/ga/ideas-for-cheap-and-simple-garden-decorations_room-interior-and-decoration.jpg"
  );
  const [title, setTitle] = React.useState("Title");
  const [titleColor, setColor] = React.useState("black");
  const [bgColor, setBackgroundColor] = React.useState("#ffffff");
  const [width, setWidth] = React.useState("");
  const [height, setHight] = React.useState("");
  const [radius, setRadius] = React.useState("5px");
  const [open, setOpen] = React.useState(false);
  const picHandler = (url) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        let pic = reader.result;
        setImage(pic);
      }
    };
    reader.readAsDataURL(url.target.files[0]);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeColor = (color) => {
    setBackgroundColor(color.hex);
  };
  const changeTitleColor = (color) => {
    setColor(color.hex);
  };
  const handleLogo = (e) => {
    if (e.target.value === "Round") {
      setRadius("50%");
      setHight("220px");
      setWidth("220px");
    } else if (e.target.value === "Normal") {
      setRadius("5px");
      setHight("auto");
      setWidth("50%");
    } else if (e.target.value === "Square") {
      setRadius("0");
      setHight("220px");
      setWidth("220px");
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <Paper className={classes.Paper} elevation={5}>
      <Grid container spacing={9}>
        <Grid item xs={12} md={5} className={classes.Grid}>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            onChange={picHandler}
          />
          <Typography className={classes.Heading} variant="h5" align="center">
            Add your Image
          </Typography>
          <div
            className={classes.imageContainer}
            style={{ backgroundColor: bgColor }}
          >
            <h2
              className={classes.Title}
              variant="subtitle1"
              style={{ color: titleColor }}
            >
              {title}
            </h2>
            <img
              src={image}
              alt="logo"
              id="profileImg"
              className={classes.img}
              style={{ borderRadius: radius, width: width, height: height }}
            ></img>
          </div>

          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera fontSize="large" />
            </IconButton>
          </label>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography className={classes.Heading} variant="h5" align="center">
            Edit The Logo
          </Typography>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={changeTitle}
          />
          <Divider />
          <Typography variant="subtitle1">Title Color</Typography>
          <TwitterPicker
            className={classes.TwitterPicker}
            color={titleColor}
            onChangeComplete={changeTitleColor}
          />
          <Divider />
          <Typography variant="subtitle1">Background Color</Typography>
          <TwitterPicker
            className={classes.TwitterPicker}
            color={bgColor}
            onChangeComplete={handleChangeColor}
          />
          <Divider />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Logo Styles
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleLogo}
              label="Logo Styles"
            >
              <MenuItem value="Logo Styles"></MenuItem>
              <MenuItem value={"Normal"}>Normal</MenuItem>
              <MenuItem value={"Round"}>Round</MenuItem>
              <MenuItem value={"Square"}>Square</MenuItem>
            </Select>
          </FormControl>
          <Divider />
          <Button
            className={classes.Button}
            color="secondary"
            onClick={handleClickOpen}
          >
            Open Preview
          </Button>
          <Dialog open={open} onClose={handleClose} maxWidth="xs">
            <DialogTitle id="form-dialog-title">Preview</DialogTitle>
            <DialogContent>
              <div style={{ backgroundColor: bgColor }}>
                <img className="mobileFrame" src={frame} alt="phone" />
                <h2
                  className="innerTitle"
                  variant="subtitle1"
                  style={{ color: titleColor }}
                >
                  {title}
                </h2>
                <img
                  src={image}
                  className="innerImage"
                  id="profileImg"
                  style={{ borderRadius: radius, width: width, height: height }}
                  alt="logo"
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                close
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default LogoEditor;
