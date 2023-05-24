import axios from "axios";
import { useState } from "react";

export default function useReviews() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const creatNewReview = async ({
    slug,
    restaurant_id,
    first_name,
    last_name,
    text,
    rating,
    user_id,
  }) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/restaurant/${slug}/reviews`,
        {
          restaurant_id,
          first_name,
          last_name,
          text,
          rating,
          user_id,
        }
      );
      setLoading(false);
      setError(false);
      setSuccess(true);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { loading, error, creatNewReview };
}
