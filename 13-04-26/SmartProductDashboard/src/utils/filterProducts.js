export function filterProducts(products, searchTerm, selectedCategory) {
  let filtered = [...products];

  const normalizedSearch = searchTerm.trim().toLowerCase();

  if (normalizedSearch) {
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(normalizedSearch)
    );
  }

  if (selectedCategory !== "all") {
    filtered = filtered.filter((product) => product.category === selectedCategory);
  }

  return filtered;
}
