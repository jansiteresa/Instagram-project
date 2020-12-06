import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./screens/home/home";
import { Profile } from "./screens/profile/profile";
import { Login } from "./screens/login/login";
// import { requireAuth } from './require-auth';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
