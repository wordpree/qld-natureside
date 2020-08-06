import React from "react";
import Home from "./pages/Home";
import ParkRaPic from "./pages/ParkRasPic";
import ParkRaInfo from "./pages/ParkRaInfo";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/parks-recreationarea" component={ParkRaPic} />
        <Route
          exact
          path="/parks-recreationarea/:slug"
          component={ParkRaInfo}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
