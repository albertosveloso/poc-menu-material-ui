import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home";
import Members from "../Members";

const Routes = props => (
  <Switch>
    <Route exact path="/" component={() => <Home />} />
    <Route path="/events" component={() => <div>Events</div>} />
    <Route path="/members" component={() => <Members />} />
  </Switch>
);

export default Routes;
