import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  entry: {
    padding: "1.75rem 0.75rem",
    background: "#0D4848",
    display: "flex",
    justifyContent: "space-around",
    color: "#DCAE1D",
    fontSize: "0.8rem",
    [theme.breakpoints.down(600)]: {
      flexDirection: "column",
      textAlign: "center",
      "&>*": {
        paddingBottom: "1rem",
      },
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  imgCredit: {
    "&>a": {
      color: "inherit",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.entry}>
      <Link to="/" className={classes.link}>
        Home
      </Link>
      <div>
        &copy;{new Date().getFullYear()}
        <span> design and develop by @Jun</span>
      </div>
      <div className={classes.imgCredit}>
        Images are from <a href="https://unsplash.com">unsplash</a>
      </div>
    </div>
  );
};

export default Footer;
