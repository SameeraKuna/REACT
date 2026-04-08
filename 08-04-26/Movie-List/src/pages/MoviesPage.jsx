import { useEffect, useState } from "react";
import MovieTable from "../components/MovieTable";
import Filters from "../components/Filters";

const DATA_URL =
  "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState([]);

  useEffect(() => {
    fetch(DATA_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      });
  }, []);

  // Filtering logic
  useEffect(() => {
    let result = movies;

    if (titleFilter) {
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase())
      );
    }

    if (genreFilter.length > 0) {
      result = result.filter((movie) =>
        movie.genres.some((g) => genreFilter.includes(g))
      );
    }

    setFilteredMovies(result);
  }, [titleFilter, genreFilter, movies]);

  // Extract unique genres
  const genres = [...new Set(movies.flatMap((m) => m.genres))];

  return (
    <>
      <Filters
        genres={genres}
        setTitleFilter={setTitleFilter}
        setGenreFilter={setGenreFilter}
      />
      <MovieTable movies={filteredMovies} />
    </>
  );
}

export default MoviesPage;