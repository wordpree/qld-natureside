import React from "react";
import Container from "@material-ui/core/Container";
import HeaderCon from "../container/HeaderCon";
import Hero from "../components/home/Hero";
export default function Home() {
  const insertProps = {
    title: "Welcom to QLD parks and recreation area",
    subtitle: "Learn More",
    link: "/parks-recreationarea"
  };
  return (
    <>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <HeaderCon />
        <Hero {...insertProps} />
      </Container>
    </>
  );
}
