import axios from "axios";
import { useState } from "react";

export default function useBooking() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const creatNewBooking = async ({
    slug,
    partySize,
    day,
    time,
    bookerEmail,
    bookerPhone,
    bookerFirstName,
    bookerLastName,
    bookerOccasion,
    bookerRequest,
    setSuccess,
  }) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/restaurant/${slug}/reserve?day=${day}&time=${time}&partySize=${partySize}`,
        {
          bookerEmail,
          bookerPhone,
          bookerFirstName,
          bookerLastName,
          bookerOccasion,
          bookerRequest,
        }
      );
      setLoading(false);
      setError(false);
      setSuccess(true);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, creatNewBooking };
}
