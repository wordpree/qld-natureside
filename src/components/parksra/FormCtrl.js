import React, { useState, useEffect } from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ParaLists from "./ParaLists";
import Loading from "../Loading";

const useStyles = makeStyles(theme => ({
  section: {
    padding: "3rem",
    background: "#FAFAFA",
    maxWidth: 1520,
    margin: "0 auto"
  },
  typo: {
    fontFamily: "'EB Garamond', sans-serif,serif",
    textAlign: "center",
    color: "#dcae1d"
  },
  options: {
    display: "flex",
    margin: "2rem auto",
    justifyContent: "space-around",
    flex: "0 1 55%",
    textAlign: "center",
    flexDirection: "column",
    padding: "0.75rem 1.5rem",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },
  checked: {
    color: "#dcae1d !important"
  },
  fmCtrl: {
    minWidth: 140,
    marginBottom: "1.5rem",
    [theme.breakpoints.up("md")]: {
      marginBottom: "auto"
    }
  },
  fmgrp: {
    flexDirection: "row"
  },
  item: {
    "&:hover": {
      background: "#dcae1d"
    }
  }
}));

export default function FormCtrl({ handleFetchData, parks, success, url }) {
  const classes = useStyles();
  let filterParks = null;
  const [type, setType] = useState("all");
  const [check, setCheck] = useState({
    camping: false,
    fishing: false,
    swimming: false,
    boating: false
  });
  const hanldeCheckBox = name => event => {
    setCheck({
      ...check,
      [name]: event.target.checked
    });
  };
  useEffect(() => {
    async function handleContentfulDataFetch() {
      await handleFetchData();
    }
    handleContentfulDataFetch();
  });
  if (success) {
    filterParks = parks
      .filter(park => park.type.includes(type) || type === "all")
      .filter(park => {
        return check.camping ? park.camping === true : true;
      })
      .filter(park => {
        return check.fishing ? park.fishing === true : true;
      })
      .filter(park => {
        return check.swimming ? park.swimming === true : true;
      })
      .filter(park => {
        return check.boating ? park.boating === true : true;
      });
  }
  return (
    <main>
      <section className={classes.section}>
        <Typography className={classes.typo} variant="h5" gutterBottom>
          Search Parks or Recreation Areas
        </Typography>
        <div className={classes.options}>
          <FormControl className={classes.fmCtrl}>
            <InputLabel htmlFor="park-type">Park Type</InputLabel>
            <Select
              value={type}
              onChange={e => {
                setType(e.target.value);
              }}
              inputProps={{
                name: "type",
                id: "park-type"
              }}
            >
              <MenuItem value="all" className={classes.item}>
                All
              </MenuItem>
              <MenuItem value="np" className={classes.item}>
                National Park
              </MenuItem>
              <MenuItem value="ra" className={classes.item}>
                Recreation Area
              </MenuItem>
              <MenuItem value="npra" className={classes.item}>
                National Park and Recreation Area
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormGroup className={classes.fmgrp}>
              {["camping", "fishing", "swimming", "boating"].map(
                (item, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        classes={{
                          checked: classes.checked
                        }}
                        checked={check.item}
                        onChange={hanldeCheckBox(item)}
                        value={item}
                      />
                    }
                    label={item}
                  />
                )
              )}
            </FormGroup>
          </FormControl>
        </div>
      </section>
      {success ? <ParaLists parks={filterParks} url={url} /> : <Loading />}
    </main>
  );
}
