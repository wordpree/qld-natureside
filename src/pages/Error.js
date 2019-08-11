import React from "react";
import Hero from "../components/home/Hero";
export default function Error() {
  const insertProps = {
    title: "Ops!!The page is out of earth",
    subtitle: "Go Earth",
    link: "/"
  };
  return (
    <div>
      <Hero {...insertProps} />
    </div>
  );
}
