import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Card,
  CardMedia
} from "@material-ui/core";

const useStyles = makeStyles({
  section1: { margin: "2.5rem auto" },
  cardLarge: {
    width: "100%",
    height: 250
  },
  cardSmall: {
    width: "32%",
    height: 120,
    cursor: "pointer"
  },
  media: {
    height: "100%",
    transition: "all 0.4s linear 0.1s",
    backgroundSize: "cover"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center"
  }
});

export default function SectionEntry({ lists, image }) {
  const classes = useStyles();
  const [bgImg, setBgImg] = useState(image[0].fields.file.url);
  return (
    <section className={classes.section1}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card className={classes.cardLarge}>
                <CardMedia
                  image={bgImg}
                  style={{ backgroundImage: `url(${bgImg})` }}
                  className={classes.media}
                  title="Paella dish"
                />
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {image.map((image, index) => (
                <Card key={index} className={classes.cardSmall}>
                  <CardMedia
                    image={image.fields.file.url}
                    className={classes.media}
                    onClick={event => {
                      let temp = event.target.style.backgroundImage;
                      setBgImg(temp.slice(4, temp.length - 1));
                    }}
                  />
                </Card>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            {lists.map((list, index) => (
              <ListItem alignItems="flex-start" key={index}>
                <ListItemText
                  primary={list}
                  classes={{ primary: classes.typo }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </section>
  );
}
