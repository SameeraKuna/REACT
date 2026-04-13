export function getCategories(products) {
  const uniqueCategories = [...new Set(products.map((product) => product.category))];
  return ["all", ...uniqueCategories];
}