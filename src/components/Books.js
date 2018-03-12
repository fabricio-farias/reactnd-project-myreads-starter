import React from 'react';
import PropTypes from 'prop-types';
import uncamelCase from 'uncamelcase';

/**
 * @description It render the books filtered by preview shelf
 * @param {object} books - child of props object with list of books filtered by shelf
 * @param {object} shelfs - child of props object  whit array of shelfs
 * @param {function} onChangeShelf - child of props object function to chenge shef of book
 */
const Books = ({shelfs, books, onChangeShelf}) => {

  // default value if image not exists
  const noImage = "http://books.google.com/books/content?id=&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";

  return (
    <ol className="books-grid">
      {books.map(book => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail || noImage }")` }}></div>
              <div className="book-shelf-changer">
                <select value={book.shelf || "none"} onChange={event => onChangeShelf(event.target.value)}>
                  <option value="" disabled>Move to...</option>
                  {shelfs.map((shelf, index) => (
                    <option key={index} value={shelf}>{uncamelCase(shelf)}</option>
                  ))}
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors.join(", ") : ""}</div>
          </div>
        </li>
      ))}  
    </ol>
  )

}

Books.PropTypes = {
  books: PropTypes.array.isRequired,
  shelfs: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Books;