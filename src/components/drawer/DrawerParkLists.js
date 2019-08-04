import React from "react";
import Grid from "@material-ui/core/Grid";
import { drawerData } from "../../drawerData";
import DrawerPark from "./DrawerPark";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  sTop: {
    marginBottom: "2rem",
    padding: "1.5rem 0"
  }
});

export default function DrawerParkLists() {
  const classes = useStyle();
  const ParkLists = drawerData.map(item => (
    <DrawerPark key={item.id} {...item} />
  ));
  return (
    <section className={classes.sTop}>
      <Grid className={classes.gridTop} container spacing={2}>
        {ParkLists}
      </Grid>
    </section>
  );
}
