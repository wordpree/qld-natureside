import React from "react";
import SectionEntry from "./singlePageSections/SectionEntry";
import SectionActivity from "./singlePageSections/SectionActivity";
import SectionFacility from "./singlePageSections/SectionFacility";
import SectionParkAlert from "./singlePageSections/SectionParkAlert";
import SectionEss from "./singlePageSections/SectionEss";
import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyes = makeStyles({
  divider: {
    color: "#787044",
    margin: "1rem 0",
  },
  entry: {
    margin: "2.5rem auto",
    padding: "2rem 0",
  },
});
function ParaParkSingle({ park }) {
  const classes = useStyes();
  const {
    fullName,
    images,
    description,
    facilities,
    activities,
    location,
    essentials,
    openingHours,
    alerts,
  } = park;
  const entryLists = [fullName, openingHours, location, description];
  const [fityImage, actImage, ...entryImage] = images;
  const propsFacility = {
    lists: facilities,
    image: fityImage,
    title: "You can access this site's facilities",
    reverse: true,
  };
  const propsActivity = {
    lists: activities,
    image: actImage,
    title: "You can take part in all these activities",
    reverse: false,
  };

  return (
    <div className={classes.entry}>
      <Typography variant="h4">{fullName}</Typography>
      <SectionEntry lists={entryLists} image={entryImage} />
      <Divider className={classes.divider} />
      <SectionFacility {...propsFacility} />
      <Divider className={classes.divider} />
      <SectionActivity {...propsActivity} />
      <Divider className={classes.divider} />
      <SectionEss essentials={essentials} />
      <Divider className={classes.divider} />
      <SectionParkAlert alerts={alerts} />
    </div>
  );
}

export default ParaParkSingle;
