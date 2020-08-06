import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardBackspace } from "mdi-material-ui";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "1rem 3%",
    background: "#008F8F",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImg: {
    width: 52,
    height: "auto",
  },
  logoText: {
    padding: "0.5rem 0 0 1rem",
    display: "none",
    [theme.breakpoints.up(768)]: {
      display: "block",
    },
  },
  typo: {
    fontFamily: "'Dancing Script', sans-serif,serif",
    color: "#dcae1d",
    display: "block",
  },
  logoLink: {
    textDecoration: "none",
    color: "inherit",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function ParaHeader(props) {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div>
        <Link to="/" className={classes.logoLink}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" className={classes.logoImg} />
            <div className={classes.logoText}>
              <Typography className={classes.typo} variant="h5">
                Qeensland Nature Side
              </Typography>
              <Typography className={classes.typo} variant="h6">
                Parks &Recreation Areas
              </Typography>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link to={props.link} className={classes.link}>
          <Button className={classes.linkBtn}>
            <KeyboardBackspace
              style={{ color: "#dcae1d", marginRight: "0.5rem" }}
            />
            <Typography className={classes.typo}>Go Back</Typography>
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default ParaHeader;
