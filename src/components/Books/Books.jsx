import React from 'react';
import './Books.css'
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
    const loadedBooks = useLoaderData()
    console.log(loadedBooks.books)
    return (
        <div className='container mx-auto grid grid-cols-3 gap-4'>
            {
                loadedBooks.books.map(book => <Book
                    key={book.isbn13}
                    book={book}
                ></Book>)
            }
        </div>
    );
};

export default Books;