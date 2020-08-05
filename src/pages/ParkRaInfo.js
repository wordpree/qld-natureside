import React from "react";
import ParaHeader from "../components/parksra/ParaHeader";
import Container from "@material-ui/core/Container";
import ParaSingleCon from "../container/ParaSingleCon";

export default function ParkRaInfo({ match }) {
  return (
    <>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <ParaHeader link="/parks-recreationarea" />
        <ParaSingleCon slug={match.params.slug} />
      </Container>
    </>
  );
}
