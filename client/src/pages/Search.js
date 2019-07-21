import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron"
import InputBox from "../components/InputBox"
import API from "../utils/API"
import Button from "../components/Button"
import SaveButton from "../components/SaveButton"
// import Nav from "../components/Nav"
// import "./App.css";
import Container from "../components/Container";
import Card from "../components/Card"
// import BookList from "./components/BookList"





class Search extends Component {

  state = {
    books: [],
    titleSearched: ""
  }
 

  handleInputChange = event => {
  
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
      
      this.setState({
        titleSearched: ''

      })

    
  }

  saveBook = book =>{
    API.saveBook( book )
    .then(res => { 
      console.log(res)
    })
  }



  render() {
    return (
      <div className="container-fluid">
      
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
        <Container >
          <h1>Results: </h1>
          <div className="card-columns">
          {this.state.books.map(book =>{

            return(<Card 
              books={book}
              url= {book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}
              title= {book.volumeInfo.title}
              description= {book.volumeInfo.description}
              author= {book.volumeInfo.authors[0]}
              key={book.id}
              >
              <SaveButton  onClick={() => this.saveBook(
                { 
                  title: book.volumeInfo.title,
                  description: book.volumeInfo.description,
                  image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
                  // author: 

                }
              )}/>
              

            </Card>
            )
          })}

            </div>
        </Container>
      </div>
    );
  }
}

export default Search;
