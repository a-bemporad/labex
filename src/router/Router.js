import React from "react";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTrip from "../pages/CreateTripPage";
import Candidates from "../components/Candidates";
import ErrorPage from "../pages/ErrorPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TripsPage from "../pages/TripsPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/application-form/:tripId"}>
          <ApplicationFormPage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/trips"}>
          <TripsPage />
        </Route>
        <Route exact path={"/trips/create"}>
          <CreateTrip />
        </Route>
        <Route exact path={"/trips/details"}>
          <Candidates />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
