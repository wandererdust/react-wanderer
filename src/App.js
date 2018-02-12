import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Switch, Redirect } from "react-router-dom";
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
                <Redirect to={ slidesData[0].path }/>
            </Switch>
        );
    }
}

export default App;
