import React from 'react';
import PropTypes from 'prop-types';
import BookShelfs from './BookShelfs';

/**
 * @description It render the top of page em title too
 * @param {object} books - child of props object  
 * @param {function} onChangeShelf - child of props object function to chenge shef of book
 */
const ListBooks = ({books, onChangeShelf}) =>  {
 
  /**
   * @description Get shelf key from books object and reduce duplicity
   * @param {array} books - The list of books
   * @return {array} - The shelfs title from books shelf key
   */
  const getShelfs = (books) => {
    if (Array.isArray(books)) {
      let shelfs = [];
      books.map(book => shelfs.push(book.shelf));
      return shelfs.filter((shelf, index, arr) => !index || shelf !== arr[index - 1]);
    }
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelfs
          shelfs={getShelfs(books)}
          books={books}
          onChangeShelf={onChangeShelf}
        />
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default ListBooks;