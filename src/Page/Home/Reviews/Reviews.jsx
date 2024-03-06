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
    <div className=" p-5 bg-gradient-to-r  ">
      <h1 className="text-center text-5xl font-extrabold mb-4 ">What Our <span className="text-[#139BFF]">Client Said</span></h1>
      <div className="flex justify-center">
        {reviews.map(review => (
          <img
            key={review.id}
            src={review.avatar}
            alt={`${review.name}'s Avatar`}
            className={`h-24 w-24 rounded-full m-2 mt-12 ${hoveredReview === review.id ? '' : 'opacity-40'}`}
            onMouseEnter={() => setHoveredReview(review.id)}
            onMouseLeave={() => setHoveredReview(review.id)}
          />
        ))}
      </div>
      {hoveredReview !== null && (
        <div className="mt-8 text-center mb-10">
          <h3 className="text-3xl font-bold m-2 bg-gradient-to-r from-pink-700 to-gray-700 inline-block text-transparent bg-clip-text">{reviews[hoveredReview - 1].name}</h3>
          <p className="font-semibold">{reviews[hoveredReview - 1].profession}</p>
          <p className="font-semibold text-lg m-2">Rating: {reviews[hoveredReview - 1].rating}</p>
          <p className="font-semibold text-lg">{reviews[hoveredReview - 1].review}</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;




