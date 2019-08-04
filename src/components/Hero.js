import React, { useEffect, useState } from "react";
import { bgImg } from "../drawerData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  hero: {
    height: "100vh",
    transition: "all 1s ease-in-out",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
});
export default function Hero() {
  const classes = useStyles();
  const { urls } = bgImg;
  const [index, setIndex] = useState(0);
  useEffect(() => {
    function hanldeIndex() {
      index === 2 ? setIndex(0) : setIndex(index + 1);
    }
    const id = setTimeout(hanldeIndex, 5000);
    return () => clearTimeout(id);
  }, [index]);
  return (
    <div
      className={classes.hero}
      style={{ backgroundImage: `url(${urls[index]})` }}
    />
  );
}
