import axios from "axios";
import { useEffect, useState } from "react";

const useReviews = () => {

      const [reviews, setReviews] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);

      const fetchReviews = async () => {
            try {
                  setLoading(true)
                  const response = await axios.get('/reviews.json');
                  setReviews(response?.data)
            } catch (error) {
                  setError(error?.message || "Something went wrong!");
            } finally {
                  setLoading(false)
            }
      }

      useEffect(() => {
            fetchReviews()
      }, [])

      return { reviews, error, loading, fetchReviews };
};

export default useReviews;