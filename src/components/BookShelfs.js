import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books';
import uncamelCase from 'uncamelcase';

const BookShelfs = (props) => { 
 
  BookShelfs.PropTypes = {
    books: PropTypes.array.isRequired,
    shelfs: PropTypes.array.isRequired
  }
  
  const { shelfs, books } = props;
  
  const getBooks = (shelf) => {
    return books.filter(book => book.shelf === shelf);
  }
  
  return (
    <div>
      {shelfs.map((shelf, index) => (
        <div className="bookshelf" key={index}>
          <h2 className="bookshelf-title">{uncamelCase(shelf)}</h2>
            <div className="bookshelf-books">
              <Books books={getBooks(shelf)} />
            </div>
          </div>
      ))}
    </div>  
  )
}




export default BookShelfs;