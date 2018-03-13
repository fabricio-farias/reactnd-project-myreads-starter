import React, { Component } from 'react'
import { Route } from "react-router-dom"

import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

import * as BooksAPI from './api/BooksAPI'
import uncamelCase from 'uncamelcase'
import './App.css'

/**
 * @constructor It is the beginner of the app first class 
 * @description App of Books, for sort my book reads
 */
class BooksApp extends Component {
  
  state = {
    books: [],
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
      .catch(error => alert("There was a problem listing books. Please try again"));
  }
  
  /**
   * @description It will change the shelf of the book
   * @param {string} shelf - The shelf key
   * @param {object} book - The book objecto to update
   */
  changeShelf = (shelf, book) => {
    if (shelf === book.shelf) return;
    BooksAPI.update(book, shelf)
      .then((resp) => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }));
        alert(`The book: "${book.title}" was moved to "${uncamelCase(shelf)}" with success.`);
      })
      .catch(error => alert("There was a problem moving the workbook. Please try again"));
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onChangeShelf={this.changeShelf}
          />
        )} />

        <Route path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            onChangeShelf={this.changeShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
