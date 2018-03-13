import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Books from './Books'
import * as BooksAPI from '../api/BooksAPI'

class SearchBooks extends Component {

  static poprTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    found: []
  }

  searchBooks = query => {
    if (query.length >= 3) {
      BooksAPI.search(query)
        .then(response => {
          this.setState({ found: response });
        })
        .catch(error => alert("There was a problem searching the workbook."))
    } else {
      this.setState({ found: []});
    }
  }

  render() {
    
    const { books, onChangeShelf } = this.props;
    const { found } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
           <Link className="close-search" to="/">Close</Link> 
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
           <Books
           books={this.state.found}
           onChangeShelf={onChangeShelf}
          />  
        </div>
      </div>
    )
  }
}

export default SearchBooks;
