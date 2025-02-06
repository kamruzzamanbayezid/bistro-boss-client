import { useEffect, useState } from "react";
import UseAxiosSecure from "../UseAxiosSecure";

const useReviews = () => {

      const [reviews, setReviews] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);

      const apiHandler = UseAxiosSecure();

      const fetchReviews = async () => {
            try {
                  setLoading(true)
                  const response = await apiHandler.get('/reviews');
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