import React from "react";
import SectionEntry from "./singlePageSections/SectionEntry";
import SectionActivity from "./singlePageSections/SectionActivity";
import SectionFacility from "./singlePageSections/SectionFacility";
import SectionParkAlert from "./singlePageSections/SectionParkAlert";
import SectionEss from "./singlePageSections/SectionEss";

function ParaParkSingle({ park }) {
  console.log(park);
  const {
    fullName,
    images,
    description,
    facilities,
    activities,
    location,
    type,
    essentials,
    openingHours,
    alerts
  } = park;
  const entryLists = [fullName, type, openingHours, location, description];
  const [fityImage, actImage, ...entryImage] = images;
  const propsFacility = {
    lists: facilities,
    image: fityImage,
    title: "You can access this site's facilities",
    reverse: false
  };
  const propsActivity = {
    lists: activities,
    image: actImage,
    title: "You can take part in all these activities",
    reverse: true
  };

  return (
    <>
      <SectionEntry lists={entryLists} image={entryImage} />
      <SectionFacility {...propsFacility} />
      <SectionActivity {...propsActivity} />
      <SectionEss essentials={essentials} />
      <SectionParkAlert alerts={alerts} />
    </>
  );
}

export default ParaParkSingle;
