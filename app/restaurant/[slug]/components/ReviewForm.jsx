"use client";
import { useContext, useState } from "react";
import useReviews from "../../../../hooks/useReviews";
import { AuthantcationContaxt } from "../../../context/AuthContext";
//import { useRouter } from "next/navigation";

export default function ({ restaurant_id, setIsReviws }) {
  const [reviewe, setReviewe] = useState("");
  const [rating, setRating] = useState();
  const { loading, error, creatNewReview } = useReviews();
  const { data } = useContext(AuthantcationContaxt);
  //const router = useRouter();

  const handelReviews = async () => {
    const review = await creatNewReview({
      restaurant_id,
      first_name: data.first_name,
      last_name: data.last_name,
      text: reviewe,
      rating: parseInt(rating),
      user_id: data.id,
    });
    setReviewe("");
    setRating("");
    setIsReviws(true);
    //router.prefetch;
  };
  const disapel = !rating || !reviewe;

  return (
    <>
      {data ? (
        <div>
          <textarea
            type="text"
            className="border rounded p-3 w-[100%] mb-4"
            placeholder="Review"
            value={reviewe}
            onChange={(e) => setReviewe(e.target.value)}
            name="bookerFirstName"
          />

          <input
            type="number"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            className="border rounded p-3 w-[22%] mb-4 outline-none"
            placeholder="Rate 1 to 5"
          />
          <button
            className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300 dark:bg-red-900"
            disabled={loading || disapel}
            onClick={handelReviews}
          >
            Review
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
