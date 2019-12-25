import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Profile from "./Profile/Profile";
import Main from "./MainPage/Main";
import ButtonAppBar from "./Header/Header";
import SearchByUser from "./Search/SearchByUser";
import SearchByRepository from "./Search/SearchByRepositories";
import User from "./Search/User";
import Repository from "./Search/Repository";
import NoMatch from "./NoMatch";

const App = () => {
    return (
        <Router>
            <ButtonAppBar/>
            <Switch>
                <Route path="/user/:id">
                    <User/>
                </Route>
                <Route path="/searchUser/">
                    <SearchByUser/>
                </Route>
                <Route path="/repository/:login/:name">
                    <Repository/>
                </Route>
                <Route path="/searchRepository">
                    <SearchByRepository/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/main">
                    <Main/>
                </Route>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    )
};

export default App;
