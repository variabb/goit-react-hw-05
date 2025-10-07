import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const API_KEY = "d3741c476d21774c827d472c8a08fd1f";
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div className={s.pageWrapper}>
      <h1 className={s.pageTitle}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}
