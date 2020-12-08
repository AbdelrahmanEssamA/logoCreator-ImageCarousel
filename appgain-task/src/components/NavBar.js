import React from "react";
import { Link } from "react-router-dom";

import { MenuItem, Menu, Grid } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MiniNavBar from "./MiniNavBar";

const useStyles = makeStyles((theme) => ({
  ul: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  Link: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAnchor = Boolean(anchorEl);
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.ul} item xs={3} md={12}>
        <ul className="nav-bar">
          <li>
            <Link to="/" className={classes.Link}>
              Home
            </Link>
          </li>
        </ul>
      </Grid>
      <MiniNavBar className={classes.MobileUL} />
    </div>
  );
}
