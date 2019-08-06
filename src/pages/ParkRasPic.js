import React from "react";
import ParaHeader from "../components/parksra/ParaHeader";
import ParaListsCon from "../container/ParaListsCon";
import Container from "@material-ui/core/Container";

export default function ParkRaPic({ match }) {
  return (
    <Container>
      <ParaHeader />
      <ParaListsCon url={match.url} />
    </Container>
  );
}
