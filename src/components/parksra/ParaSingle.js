import React, { useEffect } from "react";
import ParaSingleProcess from "./ParaSingleProcess";
import ParaSingleLoad from "./ParaSingleLoad";

export default function ParaSingle(props) {
  const { success, contentfulDisaptch, data, slug } = props;
  useEffect(() => {
    async function handleDataFetch() {
      await contentfulDisaptch();
    }
    handleDataFetch();
  });
  return success === true ? (
    <ParaSingleProcess slug={slug} data={data} />
  ) : (
    <ParaSingleLoad />
  );
}
