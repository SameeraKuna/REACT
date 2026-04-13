import ProductCard from "./ProductCard";

function ProductList({ products, favorites, onSelectProduct, onToggleFavorite }) {
  if (products.length === 0) {
    return <p className="empty-state">No products found for the current filters.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onSelectProduct={onSelectProduct}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default ProductList;