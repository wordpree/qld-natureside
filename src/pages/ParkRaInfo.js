import React from "react";
import ParaHeader from "../components/parksra/ParaHeader";
import Container from "@material-ui/core/Container";
import ParaSingleCon from "../container/ParaSingleCon";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

export default function ParkRaInfo({ match }) {
  return (
    <>
      <ScrollTop />
      <ParaHeader link="/parks-recreationarea" />
      <Container>
        <ParaSingleCon slug={match.params.slug} />
      </Container>
      <Footer />
    </>
  );
}
