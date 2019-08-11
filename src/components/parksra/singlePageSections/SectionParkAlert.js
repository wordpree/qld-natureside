import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AlertOutline } from "mdi-material-ui";
import { Typography, Card, CardHeader, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  section: { margin: "2.5rem auto", padding: "1.5rem" },
  alert: {
    maxWidth: "93%",
    margin: "0 auto"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center"
  }
});

export default function SectionParkAlert({ alerts }) {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Card className={classes.alert}>
        <CardHeader
          title="Park Alerts"
          avatar={<AlertOutline style={{ color: "#dcae1d" }} />}
        />
        <CardContent>
          <Typography className={classes.typo}>{alerts}</Typography>
        </CardContent>
      </Card>
    </section>
  );
}
