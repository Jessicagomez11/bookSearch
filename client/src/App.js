import React, { Component } from "react";
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import InputBox from "./components/InputBox"
import Button from "./components/Button"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Nav/>
      <Jumbotron>
        <br/>
          <InputBox>
            <Button 
              type="submit"
              className="btn btn-outline-secondary"
              id="bookSearch"/>
          </InputBox>
      </Jumbotron>
      </div>
    );
  }
}

export default App;
