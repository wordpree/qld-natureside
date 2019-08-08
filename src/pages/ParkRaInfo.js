import React from "react";
import ParaHeader from "../components/parksra/ParaHeader";
import Container from "@material-ui/core/Container";
import ParaSingleCon from "../container/ParaSingleCon";
import { CssBaseline } from "@material-ui/core";

export default function ParkRaInfo({ match }) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <ParaHeader link="/parks-recreationarea" />
        <ParaSingleCon slug={match.params.slug} />
      </Container>
    </>
  );
}
