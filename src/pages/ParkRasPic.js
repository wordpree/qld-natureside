import React from "react";
import ParaHeader from "../components/parksra/ParaHeader";
import FormCtrlCon from "../container/FormCtrlCon";
import Container from "@material-ui/core/Container";

export default function ParkRaPic({ match }) {
  return (
    <>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <ParaHeader link="/" />
        <FormCtrlCon url={match.url} />
      </Container>
    </>
  );
}
