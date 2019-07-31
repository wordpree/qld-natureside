import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import ArrowLeftCircle from "mdi-material-ui/ArrowLeftCircle";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import drawerData from "../drawerData";

const useStyle = makeStyles({
  container: {
    marginTop: "1.75rem",
    margin: "0 auto"
  },
  gridTop: {
    marginBottom: "2rem"
  },
  card: {
    maxWidth: "85%",
    margin: "0 auto",
    textAlign: "center"
  },
  image: {
    height: 0,
    paddingTop: "43.75%",
    transition: "all 1s linear"
  },
  fab: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "5%"
  }
});

function Park({ title, description, urls }) {
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
            <Typography component="h2" gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </Card>
    </Grid>
  );
}

export default function DrawerPanel({ closeDrawer }) {
  const classes = useStyle();
  const ParkLists = drawerData.map(item => <Park key={item.id} {...item} />);
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid className={classes.gridTop} container>
        {ParkLists}
      </Grid>
      <Divider variant="middle" />
      <Fab
        color="primary"
        className={classes.fab}
        onClick={() => closeDrawer(false)}
      >
        <ArrowLeftCircle />
      </Fab>
    </Container>
  );
}
