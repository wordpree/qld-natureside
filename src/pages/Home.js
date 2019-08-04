import React from "react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import HeaderCon from "../container/HeaderCon";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <>
      <CssBaseLine />
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <HeaderCon />
        <Hero />
      </Container>
    </>
  );
}
