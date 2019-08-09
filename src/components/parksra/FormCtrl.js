import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  options: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  fmCtrl: {
    minWidth: 140
  },
  fmgrp: {
    flexDirection: "row"
  }
});

export default function FormCtrl() {
  const classes = useStyles();
  const [type, setType] = useState("");
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
  return (
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
          <MenuItem value="np">National Park</MenuItem>
          <MenuItem value="ra">Recreation Area</MenuItem>
          <MenuItem value="npra">National Park and Recreation Area</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <FormGroup className={classes.fmgrp}>
          <FormControlLabel
            control={
              <Checkbox
                checked={check.camping}
                onChange={hanldeCheckBox("camping")}
                value="camping"
              />
            }
            label="Camping"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={check.fishing}
                onChange={hanldeCheckBox("fishing")}
                value="fishing"
              />
            }
            label="Fishing"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={check.swimming}
                onChange={hanldeCheckBox("swimming")}
                value="swimming"
              />
            }
            label="Swimming"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={check.boating}
                onChange={hanldeCheckBox("boating")}
                value="boating"
              />
            }
            label="Boating"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
