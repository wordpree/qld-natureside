import React from "react";
import Container from "@material-ui/core/Container";
import DrawerFeatureCon from "../container/DrawerFeatureCon";
import DrawerParkLists from "./DrawerParkLists";
import DrawerInfo from "./DrawerInfo";
import DrawerFooter from "./DrawerFooter";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  container: { backgroundColor: "#EEF0EF" }
});

export default function DrawerPanel(props) {
  const classes = useStyle();
  return (
    <Container className={classes.container} maxWidth="xl">
      <div>
        <DrawerParkLists />
        <DrawerInfo />
        <DrawerFeatureCon />
      </div>
      <div className={classes.footer}>
        <DrawerFooter />
      </div>
    </Container>
  );
}
