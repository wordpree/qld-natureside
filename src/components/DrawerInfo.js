import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Bike, Hiking, RunFast, PineTree, Ladybug } from "mdi-material-ui/";
import { makeStyles } from "@material-ui/core/styles";
import { avatar } from "../drawerData";

const useStyle = makeStyles({
  sMiddle: {
    textAlign: "center",
    margin: "2.5rem auto",
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.4)"
  },
  content: {
    maxWidth: "75%",
    textAlign: "center",
    margin: "2.5rem auto",
    padding: "2rem 0"
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "10px auto"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif"
  },
  icon: {
    padding: "1rem"
  }
});

export default function DrawerInfo() {
  const classes = useStyle();
  return (
    <section className={classes.sMiddle}>
      <div className={classes.content}>
        <Avatar src={avatar.img} className={classes.avatar} />
        <Typography
          className={classes.typo}
          gutterBottom
          component="h4"
          variant="h4"
        >
          {avatar.title}
        </Typography>
        <Typography className={classes.typo} component="p" variant="h5">
          {avatar.content}
        </Typography>
        <div className={classes.icon}>
          <IconButton disableRipple={true}>
            <PineTree />
          </IconButton>
          <IconButton disableRipple={true}>
            <Bike />
          </IconButton>
          <IconButton disableRipple={true}>
            <Hiking />
          </IconButton>
          <IconButton disableRipple={true}>
            <RunFast />
          </IconButton>
          <IconButton disableRipple={true}>
            <Ladybug />
          </IconButton>
        </div>
      </div>
    </section>
  );
}
