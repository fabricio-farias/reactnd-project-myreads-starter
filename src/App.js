import React, { Component } from 'react'
import ListBooks from './components/ListBooks';
import * as BooksAPI from './api/BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(
      books => this.setState({ books }),
      error => console.error(error, "Ocorreu um problema ao listar os livros")
    )
  }

  render() {
    return (
      <div className="app">
        <ListBooks books={this.state.books} />
      </div>
    )
  }
}

export default BooksApp
