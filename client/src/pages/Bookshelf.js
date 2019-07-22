import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron"
import Container from "../components/Container"
import API from "../utils/API"
// import Card from '../components/Card'


class Bookshelf extends Component {
    state = {
        book: {}
    }



    componentDidMount() {
        API.getBook(this.props.match)
            .then(res => {
                console.log(res.data)
                this.setState({ book: res.data })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Jumbotron
                    message="My saved books"
                    title="My Bookshelf">



                </Jumbotron>


                {/* {this.state.books.map(book => {

                    return (<Card
                        books={book}
                        url={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}
                        title={book.volumeInfo.title}
                        description={book.volumeInfo.description}
                        author={book.volumeInfo.authors[0]}
                        key={book.id}
                    >



                    </Card>
                    )
                })} */}


                {/* books={this.state.book}
                    url={this.state.book.imageLinks ? this.state.book.imageLinks.thumbnail : ''}
                    title={this.state.book.title}
                    description={this.state.book.description}
                    author={this.state.book.author}
                    key={this.state.book.id} */}




            </Container>
        )
    }
}

export default Bookshelf