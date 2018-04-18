import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import Carrousel from "./components/Carrousel/Carrousel";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/who" component={Carrousel} />
                <Route path="/what" component={Carrousel} />
                <Route path="/love" component={Carrousel} />
                <Route path="/when" component={Carrousel} />
                <Redirect to="/who" />
            </Switch>
        );
    }
}

export default App;
