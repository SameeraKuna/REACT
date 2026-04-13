function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  onClearFilters,
}) {
  return (
    <div className="filter-bar">
      <select value={selectedCategory} onChange={onCategoryChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select value={sortBy} onChange={onSortChange}>
        <option value="default">Sort By</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="rating-high-low">Rating: High to Low</option>
        <option value="title-a-z">Title: A-Z</option>
      </select>

      <button className="clear-btn" onClick={onClearFilters}>
        Clear Filters
      </button>
    </div>
  );
}

export default FilterBar;