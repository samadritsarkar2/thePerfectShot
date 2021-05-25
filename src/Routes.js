import React from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import NavI from "./Components/Nav";
import Random from "./Components/Random";
import Search from "./Components/Search";


const Routes = () => {
    return (
        <Router>
                <NavI />
                <Switch>
                    <Route path="/search" component={App} />
                    <Route path="/random" component={Random} />
                    <Route path="/" component={Home} />
                  
                </Switch>
        </Router>
    )
}

export default Routes;