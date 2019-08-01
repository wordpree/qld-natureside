import React from "react";
import GridList from "@material-ui/core/GridList";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { fetchData } from "../redux/action";
import { useEffect } from "react";
const useStyle = makeStyles({
  sBottom: {},
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center"
  }
});

export default function DrawerFeature({ dispatch, isFetching }) {
  const classes = useStyle();
  useEffect(() => {
    async function fetchContentfulData() {
      await dispatch(fetchData());
    }
    !isFetching && fetchContentfulData();
  });
  return (
    <section className={classes.sBottom}>
      <Typography
        className={classes.typo}
        gutterBottom
        component="h3"
        variant="h4"
      >
        Featured Photos from Parks and Recreation Area
      </Typography>
      <GridList>hello from gridlist</GridList>
    </section>
  );
}
