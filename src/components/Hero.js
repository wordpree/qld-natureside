import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "./Banner";
import bg from "../assets/image/bg1.jpg";
import "../assets/style/style.css";
import { banner } from "../util/data";

const useStyles = makeStyles({
  hero: {
    height: "100%",
  },
  figure: {
    margin: 0,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  dropback: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(180deg,transparent 0%,rgba(0,0,0,0.54) 100%)",
  },
});
export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <motion.figure
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: [1, 1.05, 1.1, 1.05, 1], rotate: [0.2, 0] }}
        transition={{ type: "spring", duration: 3 }}
        className={classes.figure}
        style={{
          background: `url(${bg})`,
        }}
      >
        <div className={classes.dropback} />
      </motion.figure>
      <Banner {...banner} />
    </div>
  );
}
