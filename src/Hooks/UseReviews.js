import { useEffect, useState } from 'react';
import { getReviews } from 'services/MovieReview-api';

const useReviews = movieId => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (movieId) {
      getReviews(movieId).then(response => {
        setReviews([...response.results]);
      });
    }
  }, [movieId]);

  return { reviews };
};

export default useReviews;
