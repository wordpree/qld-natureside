import React from "react";
import Hero from "../components/Hero";
import { error } from "../util/data";

export default function Error() {
  return (
    <div>
      <Hero {...error} />
    </div>
  );
}
