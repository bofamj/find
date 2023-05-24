"use client";
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { useRouter } from "next/navigation";

const Reviews = ({ reviews, restaurant_id }) => {
  const [isReviws, setIsReviws] = useState(false);
  const router = useRouter();
  if (isReviws) {
    //window.location.reload(true);
    router.prefetch;
    setIsReviws(false);
  }
  return (
    <div>
      <h1 className="font-bold text-2xl mt-10 mb-7 borber-b pb-5 md:text-3xl">
        What {reviews.length} people are saying
      </h1>
      <div>
        {reviews.map((review) => (
          <ReviewCard reviews={review} />
        ))}
      </div>
      <ReviewForm restaurant_id={restaurant_id} setIsReviws={setIsReviws} />
    </div>
  );
};

export default Reviews;
