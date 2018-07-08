import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Carousel from "./Carousel";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/:slide" component={Carousel} />
      </Router>
    );
  }
}

export default App;
