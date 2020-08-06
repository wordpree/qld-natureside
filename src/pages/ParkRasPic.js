import React from "react";
import ParaHeader from "../components/parksra/ParaHeader";
import FormCtrlCon from "../container/FormCtrlCon";
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer";

export default function ParkRaPic({ match }) {
  return (
    <>
      <ParaHeader link="/" />
      <Container>
        <FormCtrlCon url={match.url} />
      </Container>
      <Footer />
    </>
  );
}
