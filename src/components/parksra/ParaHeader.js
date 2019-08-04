import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    padding: "0.5rem"
  },
  gridContainer: {
    justifyContent: "space-around"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
});

export default function ParaHeader() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Grid container className={classes.gridContainer}>
        <Grid item>
          <Typography className={classes.typo} variant="h5">
            QLD Parks and Recreation Areas Page
          </Typography>
        </Grid>
        <Grid item>
          <Link to="/" className={classes.link}>
            <Button>
              <Typography className={classes.typo}>Home</Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </header>
  );
}
