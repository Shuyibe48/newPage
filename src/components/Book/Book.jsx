import React from 'react';
import './Book.css'

const Book = ({book}) => {
    return (
        <div>
            <img className='w-full' src={book.image} />
        </div>
    );
};

export default Book;