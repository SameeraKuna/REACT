function Filters({ genres, setTitleFilter, setGenreFilter }) {
  const handleGenreChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setGenreFilter(selected);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <select multiple onChange={handleGenreChange}>
        {genres.map((genre, i) => (
          <option key={i} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;