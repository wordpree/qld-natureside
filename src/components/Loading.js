import React from "react";
import { CircularProgress } from "@material-ui/core";
export default function Loading() {
  return (
    <div
      style={{ margin: "0.5rem auto", textAlign: "center", padding: "0.75rem" }}
    >
      <CircularProgress
        style={{ color: "#dcae1d", with: "80px", height: "80px" }}
      />
    </div>
  );
}
