import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyle = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-around",
    padding: "1.75rem 1rem",
    margin: "0 auto",
    background: "linear-gradient(to right,#8F7E4A,#5079AB)"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center",
    alignSelf: "center",
    color: "#fff"
  }
});
export default function DrawerHeader({ closeDrawer }) {
  const classes = useStyle();
  return (
    <header className={classes.header}>
      <Typography className={classes.typo} component="h1" variant="h3">
        Queensland Nature Side
      </Typography>
      <Typography
        className={classes.typo}
        component="h3"
        variant="h6"
        onClick={() => closeDrawer()}
      >
        <Button>
          <Typography className={classes.typo} variant="h5">
            Home
          </Typography>
        </Button>
      </Typography>
    </header>
  );
}
