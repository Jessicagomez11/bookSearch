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
          <InputBox
              type="text"
              className="form-control"
              placeholder="Book Title"
              label="book-search-input" 
              describedby="bookSearch">
                  <Button 
                    type="search"
                    className="btn btn-outline-secondary"
                    id="bookSearch"
                    btnText="Search!"/>
          </InputBox>
      </Jumbotron>
      </div>
    );
  }
}

export default App;
