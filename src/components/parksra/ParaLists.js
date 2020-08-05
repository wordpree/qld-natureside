import React from "react";
import {
  GridListTileBar,
  GridListTile,
  GridList,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { DotsVertical } from "mdi-material-ui/";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up("md")]: {
      padding: "3.5rem",
    },
    background: "#FAFAFA",
    maxWidth: 1520,
    margin: "0 auto",
  },
  middleBar: {
    position: "absolute",
    padding: "6px 2px",
    backgroundColor: "#dcae1d",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 99,
  },
  name: {
    color: "#fff",
    textAlign: "center",
    padding: "1.5rem 0.5rem",
  },
  bottomBar: {
    fontSize: "0.85rem",
    color: "#dcae1d",
    fontWeight: 600,
    textAlign: "center",
  },
  iconBtn: {
    color: "#00303f",
  },
  btn: {
    backgroundColor: "#fff",
    textAlign: "center",
    borderColor: "#fff",
    margin: "0 atuo",
    "&:hover": {
      background: "#fff",
      boxShadow: "0 0 12px rgba(0,0,0,0.35)",
      borderColor: "#fff",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    textAlign: "center",
  },
  typo: {
    color: "#dcae1d",
  },
}));

export default function ParaParkLists({ parks, url }) {
  const classes = useStyle();
  const md = useMediaQuery("(min-width:960px)");
  const sm = useMediaQuery("(min-width:600px)");
  const cols = md ? 3 : sm ? 2 : 1;
  const variants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    hover: {
      opacity: 1,
      y: 0,
    },
  };
  const motionRef = React.forwardRef((props, ref) => (
    <motion.div ref={ref} {...props} whileHover="hover" initial="hidden" />
  ));
  const gridLists = parks.map((park, key) => (
    <GridListTile key={key} component={motionRef}>
      <img src={park.image} alt={park.name} />
      <motion.div className={classes.middleBar} variants={variants}>
        <Typography variant="body2" className={classes.name}>
          {park.name}
        </Typography>
        <Link to={url + "/" + park.name} className={classes.link}>
          <Button variant="outlined" className={classes.btn}>
            <Typography className={classes.typo} variant="subtitle2">
              Learn More
            </Typography>
          </Button>
        </Link>
      </motion.div>
      <GridListTileBar
        classes={{ title: classes.bottomBar }}
        title={park.name}
        actionIcon={
          <Link to={url + "/" + park.name}>
            <IconButton className={classes.iconBtn}>
              <DotsVertical />
            </IconButton>
          </Link>
        }
      />
    </GridListTile>
  ));

  return (
    <section className={classes.section}>
      <GridList cols={cols} spacing={24}>
        {gridLists}
      </GridList>
    </section>
  );
}
