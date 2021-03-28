import React from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import Search from "./Components/Search";


const Routes = () => {
    return (
        <Router>
                <Switch>
                    <Route path="/search" component={App} />
                    <Route path="/" component={Home} />
                
                </Switch>
        </Router>
    )
}

export default Routes;