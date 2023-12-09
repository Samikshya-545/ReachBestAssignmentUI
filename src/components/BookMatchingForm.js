import axios from 'axios';
import React, { useState } from 'react';
import '../styles/BookMatchingForm.css';

const BookMatchingForm = () => {
  const [name, setName] = useState('');
  const [bookChoosingMethod, setBookChoosingMethod] = useState('');
  const [favoriteGenre, setFavoriteGenre] = useState('');
  const [readingPace, setReadingPace] = useState('');
  const [suggestedBooks, setSuggestedBooks] = useState([]); //Books

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log({
        bookChoosingMethod,
        genrePreferences: favoriteGenre,
        readingPace,
      });

    try {
        const response = await axios.post('http://localhost:5001/suggest-books', {
          bookChoosingMethod,
          genrePreferences: favoriteGenre,
          readingPace,
        });
  
        setSuggestedBooks(response.data.suggestedBooks);
      } catch (error) {
        console.error('Error suggesting books:', error);
      }
  };

  return (
    <>
        <div className="book-matching-form">
            <div className='book-matching-form-header'>Welcome to BookHarmony</div>
            <div className='book-matching-form-tagline'>Where Personalities and Pages Unite</div>

            <form onSubmit={handleFormSubmit}>

                <label className='book-matching-form-instruction'>Kindly answer the below questions to find your perfect book</label>

                <label htmlFor="name">Your Name:</label>
                <input
                type="text"
                placeholder='Please Enter Your Name Here'
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />

                <label htmlFor="bookChoosingMethod">How do you usually choose your books?</label>
                <select
                id="bookChoosingMethod"
                value={bookChoosingMethod}
                onChange={(e) => setBookChoosingMethod(e.target.value)}
                required
                >
                <option value="">Select an option</option>
                <option value="authorReputation">Based on the author's reputation</option>
                <option value="bookReviews">By reading book reviews and recommendations</option>
                <option value="randomPicking">Randomly picking books that catch my eye</option>
                </select>

                <label htmlFor="readingPace">How would you describe your reading pace?</label>
                <select
                id="readingPace"
                value={readingPace}
                onChange={(e) => setReadingPace(e.target.value)}
                required
                >
                <option value="">Select an option</option>
                <option value="quick">I read quickly and finish books in a few days</option>
                <option value="moderate">I read at a moderate pace, taking a week or two to finish a book</option>
                <option value="slow">I read slowly, savoring each page over several weeks</option>
                </select>

                <label>Favorite Genre:</label>
                <div className='favoriteGenre'>
                <input
                    type="radio"
                    id="romance"
                    value="Romance"
                    checked={favoriteGenre === 'romance'}
                    onChange={() => setFavoriteGenre('romance')}
                />
                <label htmlFor="romance">Romance</label>

                <input
                    type="radio"
                    id="mysteryThriller"
                    value="Mystery/Thriller"
                    checked={favoriteGenre === 'mysteryThriller'}
                    onChange={() => setFavoriteGenre('mysteryThriller')}
                />
                <label htmlFor="mysteryThriller">Mystery/Thriller</label>

                <input
                    type="radio"
                    id="scienceFictionFantasy"
                    value="Science Fiction/Fantasy"
                    checked={favoriteGenre === 'sciFiFantasy'}
                    onChange={() => setFavoriteGenre('sciFiFantasy')}
                />
                <label htmlFor="scienceFictionFantasy">Science Fiction/Fantasy</label>
                </div>

                <button className='formSubmitBtn' type="submit">Find My Perfect Book</button>
            </form>
        </div>
        Books {suggestedBooks}
    </>
    
  );
};

export default BookMatchingForm;
