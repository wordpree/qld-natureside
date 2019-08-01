import React from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif"
  },

  card: {
    maxWidth: "99.5%",
    margin: "0 auto",
    textAlign: "center"
  },
  image: {
    height: 0,
    paddingTop: "53.75%",
    transition: "all 1s linear"
  }
});

export default function DrawerPark({ title, description, urls }) {
  const classes = useStyle();
  return (
    <Grid item xs={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.image}
            image={urls[0]}
            onMouseOver={e =>
              (e.target.style.backgroundImage = `url(${urls[1]})`)
            }
            onMouseOut={e =>
              (e.target.style.backgroundImage = `url(${urls[0]})`)
            }
          />
          <CardContent>
            <Typography
              className={classes.typo}
              component="h2"
              gutterBottom
              variant="h5"
            >
              {title}
            </Typography>
            <Typography className={classes.typo} component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
