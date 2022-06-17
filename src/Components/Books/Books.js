import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AllBook';
import { getBooks } from '../../redux/books/books';

export default function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <AddBook />
    </>
  );
}
