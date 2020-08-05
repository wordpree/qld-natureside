import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "50%",
    top: "25%",
    width: "100%",
    transform: "translateX(-50%)",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      padding: "1.5rem",
    },
  },
  titleWrapper: {
    position: "relative",
    padding: "1rem",
    "&::after": {
      content: "''",
      display: "table",
      height: 2,
      width: "20%",
      background: "#fff",
      position: "absolute",
      left: "50%",
      transform: "translate(-50%)",
    },
  },
  button: {
    padding: "0.5rem",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  title: {
    fontFamily: "'Dancing Script', cursive, sans-serif,serif",
    color: "#fff",
    textShadow: "0 0 10px rgba(255, 255, 255,0.5)",
    [theme.breakpoints.down(768)]: {
      fontSize: "3rem",
    },
  },
  subtitle: {
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: "Josefin Slab,serif",
    fontStyle: "italic",
    fontWeight: 600,
    [theme.breakpoints.down(768)]: {
      fontSize: "1.15rem",
    },
  },
  subtitleWrapper: {
    padding: "1rem ",
  },
  btnWrapper: {
    marginTop: "2rem",
  },
  btn: {
    color: "#fff",
    border: "2px solid #fff",
    minWidth: 138,
    borderRadius: 5,
    fontFamily: "Josefin Slab,serif",
    fontWeight: 600,
  },
}));
export default function Banner({ title, subtitle, link }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titleWrapper}>
        <Typography className={classes.title} variant="h1" gutterBottom>
          {title}
        </Typography>
      </div>
      <div className={classes.subtitleWrapper}>
        <Typography component="span" variant="h5" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </div>
      <div className={classes.btnWrapper}>
        <Link to={link} className={classes.link}>
          <Button variant="outlined" className={classes.btn}>
            Start Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
