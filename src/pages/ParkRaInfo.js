import React from "react";
import ParaHeader from "../components/parksra/ParaHeader";
import Container from "@material-ui/core/Container";
import ParaSingleCon from "../container/ParaSingleCon";
import DrawerFooter from "../components/drawer/DrawerFooter";
import { CssBaseline } from "@material-ui/core";

export default function ParkRaInfo({ match }) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <ParaHeader link="/parks-recreationarea" />
        <ParaSingleCon slug={match.params.slug} />
        <DrawerFooter />
      </Container>
    </>
  );
}
