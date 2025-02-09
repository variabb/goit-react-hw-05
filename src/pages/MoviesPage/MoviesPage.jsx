import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") || "";

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchMovies() {
      const API_KEY = "d3741c476d21774c827d472c8a08fd1f";
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();

    if (query) {
      setSearchParams({ query });
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" defaultValue={searchQuery} />
        <button type="submit">Search</button>
      </form>

      {}
      <MovieList movies={movies} />
    </div>
  );
}
