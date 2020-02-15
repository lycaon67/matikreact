import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginPage, DashboardPage, HousePage } from "../pages";

import { MainLayout, HeaderContext } from "../layouts";

function Routes() {
    return (
        <>
            <MainLayout>
                <Switch>
                    <Route exact strict path="/">
                        <Redirect to="/dashboard" />
                    </Route>
                    <Route exact strict path="/dashboard">
                        <DashboardPage />
                    </Route>
                    <Route exact strict path="/login">
                        <LoginPage />
                    </Route>
                    <Route path={"/house"}>
                        <HousePage />
                    </Route>
                </Switch>
            </MainLayout>
        </>
    );
}

export default function MainRouter() {
    const [navHeader, setNavHeader] = useState({
        state: true
    });

    return (
        <Router>
            <HeaderContext.Provider value={{ navHeader, setNavHeader }}>
                <Routes />
            </HeaderContext.Provider>
        </Router>
    );
}
