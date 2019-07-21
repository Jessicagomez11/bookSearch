import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron"
import  Container from "../components/Container"
import API from "../utils/API"

class Bookshelf extends Component{
    state= {
        book:{}
    }


    componentDidMount() {
        API.getBook(this.props.match.params.id)
          .then(res => console.log(res)
            //  this.setState({ book: res.data. })
             )
          .catch(err => console.log(err));
      }


    render(){
        return(
            <Container>
                <Jumbotron>

                {this.state.book.title}

                </Jumbotron>
            </Container>
        )
    }
    
}

export default Bookshelf