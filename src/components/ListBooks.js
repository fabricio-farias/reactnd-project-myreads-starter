import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelfs from './BookShelfs'

/**
 * @description It render the top of page em title too
 * @param {object} books - child of props object  
 * @param {function} onChangeShelf - child of props object function to chenge shef of book
 */
const ListBooks = ({books, onChangeShelf}) =>  {
 
  // Array with shelfs keyof shelfs
  const shelfs = ["currentlyReading", "wantToRead", "read"];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelfs
          shelfs={shelfs}
          books={books}
          onChangeShelf={onChangeShelf}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default ListBooks;