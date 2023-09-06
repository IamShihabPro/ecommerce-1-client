import React, { useState } from 'react';
import Rating from 'react-rating';
import '@smastrom/react-rating/style.css'


const Ratings = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div>
      <Rating
        initialRating={rating}
        emptySymbol={<i className="far fa-star"></i>}
        fullSymbol={<i className="fas fa-star"></i>}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Ratings;
