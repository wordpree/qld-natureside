import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { drawerData } from "../drawerData";
import DrawerPark from "./DrawerPark";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  sTop: {
    marginBottom: "2rem",
    padding: "1.5rem 0"
  },
  header: {
    textAlign: "center",
    margin: "2rem auto"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center"
  }
});

export default function DrawerParkLists() {
  const classes = useStyle();
  const ParkLists = drawerData.map(item => (
    <DrawerPark key={item.id} {...item} />
  ));
  return (
    <section className={classes.sTop}>
      <Typography
        className={classes.typo}
        gutterBottom
        component="h1"
        variant="h3"
      >
        Queensland Nature Side
      </Typography>
      <Grid className={classes.gridTop} container>
        {ParkLists}
      </Grid>
    </section>
  );
}
