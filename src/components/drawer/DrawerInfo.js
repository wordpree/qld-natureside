import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Bike, Hiking, RunFast, PineTree, Ladybug } from "mdi-material-ui/";
import { makeStyles } from "@material-ui/core/styles";
import { avatar } from "../../drawerData";

const useStyle = makeStyles(theme => ({
  sMiddle: {
    textAlign: "center",
    margin: "2.5rem auto",
    backgroundColor: "rgba(255,255,255,0.4)",
    [theme.breakpoints.up("md")]: {
      width: "80%"
    }
  },
  entry: {
    maxWidth: "90%",
    textAlign: "center",
    margin: "2.5rem auto",
    padding: "2rem 0"
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "10px auto",
    transition: "all 0.5s"
  },
  title: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    color: "#dcae1d",
    textAlign: "center"
  },
  content: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center"
  },
  icon: {
    padding: "1rem"
  }
}));

export default function DrawerInfo() {
  const classes = useStyle();
  const [index, setIndex] = useState(0);
  const { img, title, content } = avatar;
  const icons = [Bike, Hiking, RunFast, PineTree, Ladybug];
  const iconLists = icons.map((Icon, key) => (
    <IconButton
      key={key}
      disableRipple={true}
      disabled
      style={{ color: "#212121" }}
    >
      <Icon />
    </IconButton>
  ));
  useEffect(() => {
    function handleIndex() {
      index === 2 ? setIndex(0) : setIndex(index + 1);
    }
    const id = setTimeout(handleIndex, 4000);
    return () => clearTimeout(id);
  }, [index]);
  return (
    <section className={classes.sMiddle}>
      <div className={classes.entry}>
        <Avatar src={img[index]} className={classes.avatar} />
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography className={classes.content} component="p" variant="h6">
          {content}
        </Typography>
        <div className={classes.icon}>{iconLists}</div>
      </div>
    </section>
  );
}
