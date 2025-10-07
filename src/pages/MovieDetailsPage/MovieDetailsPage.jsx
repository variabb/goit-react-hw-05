import { useState, useEffect, useRef } from "react";
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [activeTab, setActiveTab] = useState(""); // "cast" або "reviews"
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    async function fetchMovieDetails() {
      const API_KEY = "d3741c476d21774c827d472c8a08fd1f";
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      setMovie(response.data);
    }
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={s.pageWrapper}>
      <button
        className={s.goBackButton}
        onClick={() => navigate(backLinkRef.current)}
      >
        Go Back
      </button>

      <div className={s.movieCard}>
        <img
          className={s.posterImage}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={s.movieInfo}>
          <h1 className={s.movieTitle}>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h1>
          <p className={s.overview}>{movie.overview}</p>
          <p className={s.genres}>
            Genres: {movie.genres.map((g) => g.name).join(", ")}
          </p>
          <nav className={s.detailsNav}>
            <Link
              to="cast"
              className={activeTab === "cast" ? s.activeTab : ""}
              onClick={() => setActiveTab("cast")}
              state={{ from: backLinkRef.current }}
            >
              Cast
            </Link>
            <Link
              to="reviews"
              className={activeTab === "reviews" ? s.activeTab : ""}
              onClick={() => setActiveTab("reviews")}
              state={{ from: backLinkRef.current }}
            >
              Reviews
            </Link>
          </nav>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
