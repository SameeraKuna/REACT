function ProductCard({ product, isFavorite, onSelectProduct, onToggleFavorite }) {
  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    onToggleFavorite(product.id);
  };

  return (
    <div className="product-card" onClick={() => onSelectProduct(product)}>
      <img src={product.image} alt={product.title} className="product-image" />

      <div className="product-card-body">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>

        <div className="product-meta">
          <span className="price">${product.price}</span>
          <span className="rating">⭐ {product.rating?.rate || 0}</span>
        </div>

        <button className="favorite-btn" onClick={handleFavoriteClick}>
          {isFavorite ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;