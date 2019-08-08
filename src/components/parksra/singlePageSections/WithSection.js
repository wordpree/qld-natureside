import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Card,
  CardMedia,
  CardHeader,
  ListItemIcon
} from "@material-ui/core";
import { MapMarkerOutline } from "mdi-material-ui";

const useStyles = makeStyles({
  reverse: {
    flexDirection: "row-reverse"
  },
  row: {
    flexDirection: "row"
  },
  section: { margin: "2.5rem auto" },
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
    overflowY: "auto"
  },
  media: {
    height: "100%",
    transition: "all 0.4s linear 0.1s",
    backgroundSize: "cover"
  }
});

function WithSection(lists, image, title, reverse) {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Grid
        container
        spacing={2}
        className={reverse ? classes.reverse : classes.row}
      >
        <Grid item xs={12} md={6}>
          <List className={classes.listFity}>
            {lists.map((f, index) => (
              <ListItem key={index} button>
                <ListItemIcon>
                  <MapMarkerOutline />
                </ListItemIcon>
                <ListItemText primary={f} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.cardFity}>
            <CardHeader title={title} />
            <CardMedia
              image={image.fields.file.url}
              className={classes.media}
            />
          </Card>
        </Grid>
      </Grid>
    </section>
  );
}

export default WithSection;
