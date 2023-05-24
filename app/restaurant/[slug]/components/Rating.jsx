import React from "react";
import reviewsAvreg from "../../../../utility/reviewsAvreg";
import Stars from "./Stars";

const Rating = ({ review }) => {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={review} />
        <p className="text-reg ml-3">{reviewsAvreg(review).toFixed(1)}</p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {review.length} Review{review.length > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default Rating;
