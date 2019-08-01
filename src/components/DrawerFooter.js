import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  fab: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "5%"
  }
});
export default function DrawerFooter() {
  const classes = useStyle();
  return <div />;
}
