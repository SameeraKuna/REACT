export function sortProducts(products, sortBy) {
  const sorted = [...products];

  switch (sortBy) {
    case "price-low-high":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-high-low":
      return sorted.sort((a, b) => b.price - a.price);

    case "rating-high-low":
      return sorted.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));

    case "title-a-z":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));

    default:
      return sorted;
  }
}