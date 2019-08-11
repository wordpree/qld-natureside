import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Button } from "@material-ui/core";
import UnFoldMoreVetical from "mdi-material-ui/UnfoldMoreVertical";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 325,
    position: "absolute",
    left: "50%",
    top: "32%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(0,0,0,0.4)",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      padding: "1.5rem"
    }
  },
  content: {
    padding: "1rem 0.75rem"
  },
  button: {
    padding: "0.5rem"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    color: "#fff"
  },
  actions: {
    textAlign: "center",
    display: "block"
  }
}));
export default function Banner({ title, subtitle, link }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.typo} variant="h4" gutterBottom>
          {title}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Link to={link} className={classes.link}>
          <Button className={classes.button}>
            <span className={classes.typo}>{subtitle}</span>
            <UnFoldMoreVetical style={{ color: "#fff" }} />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
