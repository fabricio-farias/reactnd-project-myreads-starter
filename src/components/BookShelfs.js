import React from 'react'
import PropTypes from 'prop-types'
import Books from './Books'
import uncamelCase from 'uncamelcase'

/**
 * @description It render the shelfs of ListBooks
 * @param {object} books - child of props object with list of books  
 * @param {object} shelfs - child of props object  whit array of shelfs
 * @param {function} onChangeShelf - child of props object function to chenge shef of book
 */
const BookShelfs = ({ shelfs, books, onChangeShelf }) => { 
  
  /**
   * @description Get list of books by slehf key
   * @param {strinh} shelf - shelf name to filter in object os books
   * @return {array} - list of books by the shelf key
   */
  const getBookByShelf = (shelf) => {
    return books.filter(book => book.shelf === shelf);
  };

  return (
    <div>
      {shelfs.map((shelf, index) => (
        <div className="bookshelf" key={index}>
          <h2 className="bookshelf-title">{uncamelCase(shelf)}</h2>
          <div className="bookshelf-books">  
            <Books
              shelfs={shelfs}
              books={getBookByShelf(shelf)}
              onChangeShelf={onChangeShelf}
            />
          </div>
        </div>
      ))}
    </div>  
  )
}

BookShelfs.PropTypes = {
  books: PropTypes.array.isRequired,
  shelfs: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default BookShelfs;