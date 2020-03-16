import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {
    LoginPage,
    DashboardPage,
    HousePage,
    RoomPage,
    AdminPage
} from "../pages";

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
                    <Route exact strict path="/admin">
                        <AdminPage />
                    </Route>
                    <Route exact strict path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact strict path="/profile">
                        <DashboardPage />
                    </Route>
                    <Route path={"/house"}>
                        <HousePage />
                    </Route>
                    <Route exact strict path={"/room/:roomid"}>
                        <RoomPage />
                    </Route>
                </Switch>
            </MainLayout>
        </>
    );
}

export default function MainRouter() {
    const [navHeader, setNavHeader] = useState({
        state: true,
        houseId: 3,
        roomId: '',
    });

    return (
        <Router>
            <HeaderContext.Provider value={{ navHeader, setNavHeader }}>
                <Routes />
            </HeaderContext.Provider>
        </Router>
    );
}
