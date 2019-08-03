import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import DrawerHeader from "./DrawerHeader";
import DrawerFeatureCon from "../container/DrawerFeatureCon";
import DrawerParkLists from "./DrawerParkLists";
import DrawerInfo from "./DrawerInfo";
import DrawerFooter from "./DrawerFooter";

export default function DrawerPanel(props) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  return (
    <Container
      style={{
        backgroundColor: "#EEF0EF",
        width: `${width}px`
      }}
      maxWidth="xl"
    >
      <DrawerHeader {...props} />
      <DrawerParkLists />
      <DrawerInfo />
      <DrawerFeatureCon />
      <DrawerFooter />
    </Container>
  );
}
