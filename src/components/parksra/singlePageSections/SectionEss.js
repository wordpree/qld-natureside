import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography
} from "@material-ui/core";
import { SignDirection } from "mdi-material-ui";

const usetStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto"
  },
  list: {
    [theme.breakpoints.up("md")]: {
      width: "33%"
    }
  },
  lists: {
    padding: "1.5rem",
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center"
  }
}));
export default function SectionEss({ essentials }) {
  const classes = usetStyles();
  return (
    <section className={classes.root}>
      <Typography className={classes.typo} variant="h4" gutterBottom>
        Things you should to know before your trip
      </Typography>
      <List className={classes.lists}>
        {essentials.map((f, index) => (
          <ListItem className={classes.list} key={index} button>
            <ListItemIcon>
              <SignDirection />
            </ListItemIcon>
            <ListItemText primary={f} className={classes.typo} />
          </ListItem>
        ))}
      </List>
    </section>
  );
}
