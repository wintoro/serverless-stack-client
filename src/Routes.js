import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ResetPassword from "./containers/ResetPassword";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <UnauthenticatedRoute exact path="/login/reset">
                <ResetPassword />
            </UnauthenticatedRoute>

            {/* Finally, catch all unmatched routes */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}