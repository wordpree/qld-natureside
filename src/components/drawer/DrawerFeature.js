import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import DotsVertical from "mdi-material-ui/DotsVertical";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { shouldFetchData } from "../../redux/action";
import Loading from "../Loading";

const useStyle = makeStyles(theme => ({
  sBottom: {
    marginBottom: "2rem"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center",
    padding: "1em 0",
    color: "#dcae1d"
  },
  root: {
    display: "flex",
    justifyContent: "space-around",
    overflow: "hidden",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      padding: "1rem"
    }
  },
  gridlist: {
    transform: "translateZ(0)",
    flexWrap: "nowrap",
    backgroundColor: "#fff"
  },
  tileBar: {
    background: "#dcae1d"
  },
  title: {
    color: "#00303f"
  }
}));

export default function DrawerFeature({ dispatch, featuredImage, success }) {
  const replaceStr = "GMT+1000 (Australian Eastern Standard Time)";
  const md = useMediaQuery("(max-width:960px)");
  const xl = useMediaQuery("(min-width:1280px)");
  const cellHeight = xl ? 300 : md ? 180 : 240;
  const cols = xl ? 3 : 2;
  const classes = useStyle();

  useEffect(() => {
    async function fetchContentfulData() {
      await dispatch(shouldFetchData());
    }
    fetchContentfulData();
  });
  const listCont = success ? (
    featuredImage.map(item => (
      <GridListTile key={item.url}>
        <img src={item.url} alt="nature images" />
        <GridListTileBar
          classes={{ title: classes.title, subtitle: classes.title }}
          className={classes.tileBar}
          title={item.name}
          subtitle={
            <span>Created At:{item.createdAt.replace(replaceStr, "")}</span>
          }
          actionIcon={
            <IconButton>
              <Tooltip title="Learn More">
                <DotsVertical style={{ color: "#00303f" }} />
              </Tooltip>
            </IconButton>
          }
        />
      </GridListTile>
    ))
  ) : (
    <Loading />
  );

  return (
    <section className={classes.sBottom}>
      <Typography className={classes.typo} gutterBottom variant="h5">
        Featured Photos from Parks and Recreation Area
      </Typography>
      <div className={classes.root}>
        <GridList
          className={classes.gridlist}
          cellHeight={cellHeight}
          cols={cols}
        >
          {listCont}
        </GridList>
      </div>
    </section>
  );
}
