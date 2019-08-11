import React, { useEffect, useState } from "react";
import { bgImg } from "../../drawerData";
import { makeStyles } from "@material-ui/core/styles";
import { CSSTransition } from "react-transition-group";
import Banner from "./Banner";
import "../../assets/style/style.css";

const useStyles = makeStyles({
  figure: {
    margin: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
});
export default function Hero({ title, subtitle, link }) {
  const classes = useStyles();
  const { figure } = bgImg;
  const [index, setIndex] = useState(0);
  useEffect(() => {
    function hanldeIndex() {
      index === 2 ? setIndex(0) : setIndex(index + 1);
    }
    const id = setTimeout(hanldeIndex, 4000);
    return () => clearTimeout(id);
  }, [index]);
  const figureLists = figure.map((img, key) => {
    const active = key === index ? true : false;
    return (
      <CSSTransition
        key={key}
        in={active}
        classNames="auto-transition"
        timeout={2000}
        unmountOnExit
      >
        <figure
          className={classes.figure}
          style={{ backgroundImage: `url(${img})` }}
        />
      </CSSTransition>
    );
  });
  return (
    <div className={classes.hero}>
      {figureLists}
      <Banner title={title} subtitle={subtitle} link={link} />
    </div>
  );
}
