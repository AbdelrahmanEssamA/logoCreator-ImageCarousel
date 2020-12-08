import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
function TaskSelector() {
  const logo =
    "https://s3-eu-west-1.amazonaws.com/wuzzuf/files/company_logo/Appgain-Egypt-16291-1602587232.png";
  const useStyles = makeStyles((theme) => ({
    Grid: {
      marginTop: theme.spacing(30),
    },
    Button: {
      margin: theme.spacing(3),
    },
    Link: {
      textDecoration: "none",
      color: "white",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        className={classes.Grid}
        direction="row"
      >
        <img src={logo} alt="logo" className="logo" />
      </Grid>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        direction="row"
        justify="center"
      >
        <Button
          variant="contained"
          color="secondary"
          className={classes.Button}
        >
          <Link to="/LogoEditor" className={classes.Link}>
            Logo Editor
          </Link>
        </Button>
        <Button variant="outlined" color="secondary" className={classes.Button}>
          Image Carousel
        </Button>
      </Grid>
    </div>
  );
}

export default TaskSelector;
