import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      const API_KEY = "d3741c476d21774c827d472c8a08fd1f";
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching cast data:", error);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  const placeholderImage = "/src/images/error.jpg";

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id} className={styles.castItem}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : placeholderImage
              }
              alt={actor.name}
              className={styles.actorImage}
            />
            <p>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
