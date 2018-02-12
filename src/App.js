import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Carrousel from "./components/Carrousel/Carrousel";
import slidesData from "./slidesData";

class App extends Component {

    render() {
        return (
            <Switch>
                {slidesData.map(slide => (
                    <Route path={slide.path} component={Carrousel} />
                ))}
                <Route component={Carrousel} />
            </Switch>
        );
    }
}

export default App;
