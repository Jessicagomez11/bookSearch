import React, { Component } from "react";
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Nav/>
      <Jumbotron/>
      </div>
    );
  }
}

export default App;
