import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardBackspace } from "mdi-material-ui";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
const useStyles = makeStyles({
  header: {
    padding: "1rem",
    background: "#7a9d96"
  },
  gridContainer: {
    justifyContent: "space-around"
  },
  logo: {
    display: "flex",
    justifyContent: "flex-start"
  },
  logoText: {
    padding: "0.5rem 0 0 1rem"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    color: "#dcae1d"
  },
  logoLink: {
    textDecoration: "none",
    color: "inherit"
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    position: "absolute",
    top: "50%",
    right: "3.5%",
    transform: "translateY(-50%)"
  }
});

function ParaHeader(props) {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Grid container className={classes.gridContainer} spacing={3}>
        <Grid item xs={12} md={6}>
          <Link to="/" className={classes.logoLink}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" style={{ maxHeight: "95px" }} />
              <div className={classes.logoText}>
                <Typography className={classes.typo} variant="h5">
                  Qeensland
                </Typography>
                <Typography className={classes.typo} variant="h5">
                  Nature Side
                </Typography>
                <Typography className={classes.typo} variant="h6">
                  Parks &Recreation Areas
                </Typography>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item style={{ position: "relative" }} xs={12} md={6}>
          <Link to={props.link} className={classes.link}>
            <Button className={classes.linkBtn}>
              <KeyboardBackspace
                style={{ color: "#dcae1d", marginRight: "0.5rem" }}
              />
              <Typography className={classes.typo}>Go Back</Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </header>
  );
}

export default ParaHeader;
