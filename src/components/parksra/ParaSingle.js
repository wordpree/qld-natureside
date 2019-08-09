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
  if (success === true) {
    const park = data.find(item => item.fullName === slug);
    if (park) {
      console.log(park.type);
      return <ParaSingleProcess park={park} />;
    } else {
      return <div>hello from no park found page</div>;
    }
  } else {
    return <ParaSingleLoad />;
  }
}
