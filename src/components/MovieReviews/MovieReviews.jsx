import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      const API_KEY = "d3741c476d21774c827d472c8a08fd1f";
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
      );
      setReviews(response.data.results);
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={styles["reviews-container"]}>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className={styles["review-card"]}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
            <p className="author">– {review.author}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
