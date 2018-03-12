import React, { Component } from 'react'
import ListBooks from './components/ListBooks';
import * as BooksAPI from './api/BooksAPI'
import './App.css'

/**
 * @constructor It is the beginner of the app first class 
 * @description App of Books, for sort my book reads
 */
class BooksApp extends Component {
  
  state = {
    books: []
  }

  /**
   * @description is invoked immediately after a component is mounted
   */
  componentDidMount() {

  /**
   * @description Get from API server the list of books
   * @return {array} - The books array 
   */
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .catch(error => console.error(error, "Ocorreu um problema ao listar os livros"))
  }
  
  changeShelf = (book) => {
    console.log("changeShelf:-> ", book);

  }

  render() {
    return (
      <div className="app">
        <ListBooks
          books={this.state.books}
          onChangeShelf={this.changeShelf}
        />
      </div>
    )
  }
}

export default BooksApp
