import React from "react";
import Typogrphy from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import { Facebook, Linkedin, Twitter, Pinterest } from "mdi-material-ui";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  footer: {
    backgroundColor: "#00303f",
    textAlign: "center"
  },
  list: {
    display: "flex",
    justifyContent: "center"
  },
  iconBtn: {
    color: "#dcae1d"
  },
  social: {
    maxWidth: "20rem",
    margin: "0 auto"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center",
    color: "#dcae1d"
  },
  typoCont: {
    padding: "0.5rem 0"
  },
  hr: {
    height: "1px",
    width: "60%",
    margin: "0 auto",
    backgroundColor: "#2F6F80"
  },
  socialIcon: {
    display: "flex",
    textDecoration: "none",
    color: "inherit"
  }
});
export default function DrawerFooter() {
  const classes = useStyle();
  const fbHref =
    "https://www.facebook.com/dialog/share?app_id=365595947410614&display=popup&href=https://qld-natureside.netlify.com/&redirect_uri=https://www.facebook.com/";
  const twHref =
    "https://twitter.com/intent/tweet?text=Here we go&url=https://qld-natureside.netlify.com/&hashtags=reactjs,spa";
  const lkiHref =
    "https://www.linkedin.com/shareArticle?url=https://qld-natureside.netlify.com/&mini=true";
  const pinHref =
    "//pinterest.com/pin/create/link?url=https://qld-natureside.netlify.com/&media=https://spa-demo-e4d44.firebaseapp.com/static/media/snapshot.60fdb371.jpg&description=SAP with reactjs";

  const icons = [Facebook, Linkedin, Twitter, Pinterest];
  const href = [fbHref, lkiHref, twHref, pinHref];
  const listItems = icons.map((Icon, index) => (
    <ListItem key={index}>
      <a
        className={classes.socialIcon}
        target="_blank"
        rel="noopener noreferrer"
        href={href[index]}
      >
        <IconButton className={classes.iconBtn} size="small">
          <Icon />
        </IconButton>
      </a>
    </ListItem>
  ));

  return (
    <footer className={classes.footer}>
      <div className={classes.social}>
        <List className={classes.list}>{listItems}</List>
        <hr className={classes.hr} />
      </div>
      <div className={classes.typoCont}>
        <Typogrphy gutterBottom variant="caption" className={classes.typo}>
          &copy;Jun
          <br />
          photos for attention purpose
        </Typogrphy>
      </div>
    </footer>
  );
}
