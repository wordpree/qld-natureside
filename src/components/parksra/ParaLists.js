import React, { useEffect } from "react";
import {
  GridListTileBar,
  GridListTile,
  GridList,
  Button,
  IconButton,
  Typography
} from "@material-ui/core";
import { DotsVertical } from "mdi-material-ui/";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  sList: {
    padding: "3.5rem",
    background: "#FAFAFA",
    maxWidth: 1520,
    margin: "0 auto"
  },
  middleBar: {
    backgroundColor: "inherit",
    top: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    WebkitTransform: "translateX(-50%)",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      opacity: 0,
      "&:hover": {
        opacity: 1
      }
    },
    transition: "all 1s ease-in-out"
  },
  bottomBar: {
    fontSize: "80%",
    color: "#00303f"
  },
  tileBar: {
    background: "#dcae1d"
  },
  iconBtn: {
    color: "#00303f"
  },
  btn: {
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "0.5rem 1rem",
    width: "100%",
    "&:hover": {
      background: "#00303f"
    }
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center",
    color: "#dcae1d"
  }
}));

export default function ParaParkLists({
  handleFetchData,
  images,
  success,
  url
}) {
  const classes = useStyle();
  const md = useMediaQuery("(min-width:960px)");
  const sm = useMediaQuery("(min-width:600px)");
  const cols = md ? 3 : sm ? 2 : 1;
  let gridLists = "Loading...";

  useEffect(() => {
    async function handleContentfulDataFetch() {
      await handleFetchData();
    }
    handleContentfulDataFetch();
  });
  if (success) {
    gridLists = images.map((photo, key) => (
      <GridListTile key={key}>
        <img src={photo.image} alt={photo.name} />
        <GridListTileBar
          className={classes.middleBar}
          title={
            <Link to={url + "/" + photo.name} className={classes.link}>
              <Button variant="outlined" className={classes.btn}>
                <Typography className={classes.typo} variant="subtitle2">
                  Learn More
                </Typography>
              </Button>
            </Link>
          }
        />
        <GridListTileBar
          className={classes.tileBar}
          classes={{ title: classes.bottomBar }}
          title={photo.name}
          actionIcon={
            <Link to={url + "/" + photo.name}>
              <IconButton className={classes.iconBtn}>
                <DotsVertical />
              </IconButton>
            </Link>
          }
        />
      </GridListTile>
    ));
  } else {
    gridLists = "Loading...";
  }

  return (
    <main>
      <section />
      <section className={classes.sList}>
        <GridList cols={cols} spacing={24}>
          {gridLists}
        </GridList>
      </section>
    </main>
  );
}
