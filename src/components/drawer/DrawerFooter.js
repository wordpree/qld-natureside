import React from "react";
import Typogrphy from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import { Facebook, Linkedin, Twitter, Pinterest } from "mdi-material-ui";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  footer: {
    backgroundColor: "rgba(255,255,255,0.4)",
    padding: "2rem 0 3rem 0",
    textAlign: "center"
  },
  list: {
    display: "flex",
    justifyContent: "center"
  },
  iconBtn: {
    color: "#000"
  },
  social: {
    maxWidth: "20rem",
    margin: "0 auto",
    padding: "1.25rem 0"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center"
  },
  hr: {
    height: "1px",
    width: "60%",
    margin: "0 auto",
    backgroundColor: "#2F6F80"
  }
});
export default function DrawerFooter() {
  const classes = useStyle();
  const icons = [Facebook, Linkedin, Twitter, Pinterest];

  const listItems = icons.map((Icon, index) => (
    <ListItem key={index}>
      <IconButton className={classes.iconBtn}>
        <Icon />
      </IconButton>
    </ListItem>
  ));

  return (
    <footer className={classes.footer}>
      <div className={classes.social}>
        <List className={classes.list}>{listItems}</List>
        <hr className={classes.hr} />
      </div>
      <Typogrphy gutterBottom variant="subtitle2" component="span">
        &copy;Jun
        <br />
        photos for attention purpose
      </Typogrphy>
    </footer>
  );
}