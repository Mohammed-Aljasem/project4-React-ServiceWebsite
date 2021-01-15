import React from "react";
import ReactDOM from "react-dom";
import Booking from "./Components/Booking/BookingApp";
import Service from "./Components/Services/ServiceApp";
// import Register from "./Components/Register/RegisterApp"
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./Components/Register/protected.route";
import FormRegister from "./Components/Register/FormRegister";
import Register from "./Components/Register/Register";
import FormLogin from "./Components/Register/Formlogin";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/booking/:id" component={Booking} />
        <Route path="/login" component={FormLogin} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/Register" component={FormRegister} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
