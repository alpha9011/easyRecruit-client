

import { useEffect, useState } from "react";


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [hoveredReview, setHoveredReview] = useState(null);

  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <div>
      <h1 className="text-center mb-4">Reviews: {reviews.length}</h1>
      <div className="flex justify-center">
        {reviews.map(review => (
          <img
            key={review.id}
            src={review.avatar}
            alt={`${review.name}'s Avatar`}
            className={`h-20 w-20 rounded-full ${hoveredReview === review.id ? '' : 'opacity-50'}`}
            onMouseEnter={() => setHoveredReview(review.id)}
            onMouseLeave={() => setHoveredReview(review.id)}
          />
        ))}
      </div>
      {hoveredReview !== null && (
        <div className="mt-4 text-center mb-8">
          <h3 className="text-lg font-semibold">{reviews[hoveredReview - 1].name}</h3>
          <p>{reviews[hoveredReview - 1].profession}</p>
          <p>Rating: {reviews[hoveredReview - 1].rating}</p>
          <p>{reviews[hoveredReview - 1].review}</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;




