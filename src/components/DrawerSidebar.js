import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import {
  HomeCircle,
  Facebook,
  Linkedin,
  Twitter,
  Pinterest
} from "mdi-material-ui";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  sidebar: {
    width: 73,
    textAlign: "center"
  },
  iconBtn: {
    margin: "1.25rem 0",
    padding: "0.5rem",
    color: "rgba(0,0,0,0.9)"
  },
  letter: {
    display: "block",
    textAlign: "center",
    lineHeight: 1.5,
    fontFamily: "'EB Garamond', sans-serif,serif"
  },
  letters: {
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "#fff",
    padding: "1rem 0 3rem 0"
  }
});
export default function DrawerSidebar({ closeDrawer }) {
  const classes = useStyle();
  const icons = [HomeCircle, Facebook, Linkedin, Twitter, Pinterest];
  const letters = ["L", "E", "A", "R", "N", "----", "M", "O", "R", "E"];

  const letterLists = letters.map((letter, index) => (
    <span key={index} className={classes.letter}>
      {letter}
    </span>
  ));
  const iconLists = icons.map((Icon, index) => (
    <section key={index}>
      <IconButton
        className={classes.iconBtn}
        onClick={
          index === 0
            ? () => closeDrawer(false)
            : () => {
                return false;
              }
        }
      >
        <Icon />
      </IconButton>
      <Divider />
    </section>
  ));

  return (
    <Drawer variant="permanent" anchor="left">
      <div className={classes.sidebar}>
        <section className={classes.icons}>{iconLists}</section>
        <section className={classes.letters}>{letterLists}</section>
      </div>
    </Drawer>
  );
}
