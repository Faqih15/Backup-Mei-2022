import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./Home";
import Telwin from "./Telwin";
import Homeseller from "./Homeseller";
import Homeuser from "./Homeuser";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Telwin />
        </Route>
        <Route exact path="/Homeuser">
          <Homeuser />
        </Route>
        <Route exact path="/Homeseller">
          <Homeseller />
        </Route>
      </Switch>
    </Router>
  );
}
