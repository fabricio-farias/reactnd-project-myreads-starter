import React from 'react';
import PropTypes from 'prop-types';
import BookShelfs from './BookShelfs';

const ListBooks = (props) =>  {

  ListBooks.propTypes = {
    books: PropTypes.array.isRequired
  }

  const { books } = props;

  //to get shelf key from books object and reduce 
  const getShelfs = (books) => {
    if (Array.isArray(books)) {
      let shelfs = [];
      books.map(book => shelfs.push(book.shelf));
      return shelfs.filter((shelf, index, arr) => !index || shelf !== arr[index - 1]);
    }
  }

  

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelfs shelfs={getShelfs(books)} books={books} />
      </div>
    </div>
  )
} 
  

export default ListBooks;