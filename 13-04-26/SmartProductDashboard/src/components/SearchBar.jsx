function SearchBar({ searchTerm, onSearchChange, inputRef }) {
  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search products by title..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;