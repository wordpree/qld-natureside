import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import img from "../../assets/image/share.jpg";
const useStyles = makeStyles({
  header: {
    padding: "0.5rem",
    marginBottom: "1.5rem"
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

function ParaHeader(props) {
  const classes = useStyles();
  console.log(img);
  return (
    <header className={classes.header}>
      <Grid container className={classes.gridContainer} spacing={2}>
        <Grid item>
          <Link to={props.link} className={classes.link}>
            <Button>
              <Typography className={classes.typo}>Go Back</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Typography className={classes.typo} variant="h5">
            {props.title}
          </Typography>
        </Grid>
      </Grid>
    </header>
  );
}

export default ParaHeader;
