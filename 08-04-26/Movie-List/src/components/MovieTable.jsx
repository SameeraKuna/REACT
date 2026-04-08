function MovieTable({ movies }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Year</th>
          <th>Cast</th>
          <th>Genres</th>
        </tr>
      </thead>
      <tbody>
        {movies.slice(0, 100).map((movie, index) => (
          <tr key={index}>
            <td>
              {movie.thumbnail ? (
                <img src={movie.thumbnail} alt="thumb" width="50" />
              ) : (
                "N/A"
              )}
            </td>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.cast.join(", ")}</td>
            <td>{movie.genres.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MovieTable;