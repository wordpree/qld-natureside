import React from "react";
import ParaHeader from "../components/parksra/ParaHeader";
import ParaListsCon from "../container/ParaListsCon";
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";

export default function ParkRaPic({ match }) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <ParaHeader link="/" />
        <ParaListsCon url={match.url} />
      </Container>
    </>
  );
}
