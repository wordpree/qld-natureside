import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { ViewSequential } from "mdi-material-ui";
import logo from "../assets/image/logo.png";
import DrawerPanel from "./DrawerPanel";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "9%",
    left: "12%",
    zIndex: 999
  },
  item: {
    alignSelf: "center",
    textAlign: "center"
  },
  logo: {
    minWidth: "4rem",
    minHeight: "4rem",
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: "transform 0.8s ease-out",
    color: "#fff"
  },
  expanded: {
    transform: "rotate(90deg)",
    transition: "transform 0.8s ease-in",
    color: "rgba(255,255,255,0.88)"
  }
});

export default function Header({ drawerOpen, hanldeClickDrawer }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={6}>
        <Link to="/">
          <IconButton size="medium" className={classes.logo} />
        </Link>
      </Grid>
      <Grid item xs={6} className={classes.item}>
        <IconButton
          className={drawerOpen ? classes.expanded : classes.expand}
          onClick={() => hanldeClickDrawer(true)}
          aria-expanded={drawerOpen}
          aria-label="open drawer"
        >
          {<ViewSequential />}
        </IconButton>
        <Drawer
          transitionDuration={{ enter: 900, exit: 500 }}
          open={drawerOpen}
          onClose={() => hanldeClickDrawer(false)}
        >
          <DrawerPanel closeDrawer={hanldeClickDrawer} />
        </Drawer>
      </Grid>
    </Grid>
  );
}
