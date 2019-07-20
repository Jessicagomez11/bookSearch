import React, { Component } from "react";
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import InputBox from "./components/InputBox"
import Button from "./components/Button"
import API from "./utils/API"

import "./App.css";





class App extends Component {

  state = {
    books: [],
    titleSearched: ""
  }
 

  // handleInputChange = event => {
  //   console.log(event)
  
  //   const { name, value } = event.target;
  
  //   this.setState({
  //     [name]: value
  //   });
  
  // };
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  
  };

  handleFormSubmit = event => {
    event.preventDefault()
    API.searchBook(this.state.titleSearched)
      .then(res => {
        console.log(res.data.items)
        this.setState({ books: res.data.items})
      })

    
  }



  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <Jumbotron>
          <br />
          <InputBox
            name="titleSearched"
            value={this.state.titleSearched}
            label="book-search-input"
            onChange={this.handleInputChange}
           >
            
              
            
            <Button
              onClick = { this.handleFormSubmit}
              type="search"
              className="btn btn-outline-secondary"
              id="bookSearch"
              btnText="Search" />
          </InputBox>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
