import React from "react";

const reviewsAvreg = (reviews) => {
  if (!reviews.length) return 0;
  return (
    reviews.reduce((cont, review) => {
      return (cont += review.rating);
    }, 0) / reviews.length
  );
};

export default reviewsAvreg;
