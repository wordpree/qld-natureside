import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AlertOutline } from "mdi-material-ui";
import { Typography, Card, CardHeader, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  section2: { margin: "2.5rem auto" },
  cardLarge: {
    width: "100%",
    height: 250
  },
  cardSmall: {
    width: "32%",
    height: 120,
    cursor: "pointer"
  },
  cardFity: {
    width: "100%",
    height: 350
  },
  listFity: {
    maxHeight: 400,
    overflow: "auto"
  },
  media: {
    height: "100%",
    transition: "all 0.4s linear 0.1s",
    backgroundSize: "cover"
  },
  alert: {
    maxWidth: "93%",
    margin: "0 auto"
  }
});

export default function SectionParkAlert({ alerts }) {
  const classes = useStyles();
  return (
    <section className={classes.section4}>
      <Card className={classes.alert}>
        <CardHeader
          title="Park Alerts"
          avatar={<AlertOutline style={{ color: "#f57c00" }} />}
        />
        <CardContent>
          <Typography>{alerts}</Typography>
        </CardContent>
      </Card>
    </section>
  );
}
