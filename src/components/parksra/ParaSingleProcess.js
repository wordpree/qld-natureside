import React, { useState } from "react";
import {
  Grid,
  List,
  ListItem,
  Container,
  Typography,
  ListItemText,
  Card,
  CardMedia,
  CardHeader,
  CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AlertOutline } from "mdi-material-ui";
const useStyles = makeStyles({
  cardLarge: {
    width: "100%",
    height: 250
  },
  cardSmall: {
    width: "32%",
    height: 92,
    cursor: "pointer"
  },
  media: {
    height: "100%",
    transition: "all 0.4s linear 0.1s",
    backgroundSize: "cover"
  },
  alert: {
    maxWidth: "93%",
    margin: "0 auto"
  }
});
export default function ParaParkSingle({ data, slug }) {
  const classes = useStyles();
  const park = data.find(item => item.name === slug);
  console.log(park);
  const {
    fullName,
    images,
    description,
    address,
    location,
    type,
    openingHours,
    alerts
  } = park;
  const lists = [fullName, type, openingHours, location, description];
  const [, , ...left] = images;
  const [bgImg, setBgImg] = useState(left[0].fields.file.url);

  const section1 = (
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
            {left.map((item, index) => (
              <Card key={index} className={classes.cardSmall}>
                <CardMedia
                  image={item.fields.file.url}
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
              <ListItemText primary={list} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
  const section2 = (
    <>
      {section1}
      <Card className={classes.alert}>
        <CardHeader
          title="Park Alerts"
          avatar={<AlertOutline style={{ color: "yellow" }} />}
        />
        <CardContent>
          <Typography>{alerts}</Typography>
        </CardContent>
      </Card>
    </>
  );
  return <Container>{section2}</Container>;
}
