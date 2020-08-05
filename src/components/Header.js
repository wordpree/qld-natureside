import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/image/logo.svg";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 999,
    alignItems: "center",
    padding: "2.5rem 10%",
  },
  logo: {
    minWidth: "4rem",
    minHeight: "4rem",
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  button: {
    color: "#fff",
    border: "2px solid #fff",
    borderRadius: 15,
    minWidth: 128,
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Link to="/" className={classes.link}>
          <IconButton size="medium" className={classes.logo} />
        </Link>
      </div>
      <div>
        <Link to="/parks-recreationarea" className={classes.link}>
          <Button className={classes.button}>Discover</Button>
        </Link>
      </div>
    </div>
  );
}
