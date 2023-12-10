// src/components/BookMatchingModal.js
import React from 'react';
import '../styles/BookSuggestingModal.css'

const BookSuggestingModal = ({ suggestedBooks, onClose }) => {
  return (
    <div className="book-matching-modal">
        <div className='book-modal-conent'>
            <div className="book-matching-modal-header">Top Books Suggested By BookHarmony</div>
            <div className="book-matching-form-tagline">Where Personalities and Pages Unite</div>

            <div className='suggestionline'>Based on your unique preferences and interests, we recommend considering the following books for your next delightful reading journey:</div>
            <ol>
                {suggestedBooks.slice(0, 5).map((book) => (
                <li key={book}>{book}</li>
                ))}
            </ol>

            <button className="close-btn" onClick={onClose}>
                Close
            </button>
        </div>
    </div>
  );
};

export default BookSuggestingModal;
