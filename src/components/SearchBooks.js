import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Books from './Books'
import {DebounceInput} from 'react-debounce-input'
import * as BooksAPI from '../api/BooksAPI'

class SearchBooks extends Component {

  static poprTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    found: []
  }

  /**
   * @description It will searh on server for the workbook
   * @param {string} query - The term for the search
   */
  searchBooks = query => {
    BooksAPI.search(query)
      .then(response => {
        if (Array.isArray(response)) {
          response.map(item => {
            let myBook = this.props.books.find(b => b.id === item.id);
            if (myBook) item.shelf = myBook.shelf;
            return item;
          });
          this.setState({ found: response });  
        } else {
          this.setState({ found: []});
        }
      })
      .catch(error => console.error("There was a problem searching the workbook."))
  }

  render() {
    
    const { onChangeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
           <Link className="close-search" to="/">Close</Link> 
          <div className="search-books-input-wrapper">
            <DebounceInput
              minLength={3}
              debounceTimeout={500}
              placeholder="Search by title or author"
              onChange={(event) => this.searchBooks(event.target.value)} />
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
