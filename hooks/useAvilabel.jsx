import axios from "axios";
import { useState } from "react";

export default function useAvilabel() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async ({ slug, partySize, day, time }) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${slug}/availability?day=${day}&time=${time}&partySize=${partySize}`
      );
      setLoading(false);
      setError(false);
      setData(response.data);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, data, error, getData };
}
