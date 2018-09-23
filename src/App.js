import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Carousel from "./components/Carousel";

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
