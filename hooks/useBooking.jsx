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
    //`https://find-five.vercel.app/api/restaurant/${slug}/reserve?day=${day}&time=${time}&partySize=${partySize}`
    //http://localhost:3000
    try {
      const response = await axios.post(
        `/api/restaurant/${slug}/reserve?day=${day}&time=${time}&partySize=${partySize}`,
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
      //setError(error.response.data.errorMessage);
      setError(error.message);
    }
  };

  return { loading, error, creatNewBooking };
}
