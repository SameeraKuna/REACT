function ProductDetails({ product }) {
  if (!product) {
    return (
      <div className="product-details empty-details">
        <h2>Product Details</h2>
        <p>Select a product card to view more details.</p>
      </div>
    );
  }

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <img src={product.image} alt={product.title} className="details-image" />

      <h3>{product.title}</h3>
      <p className="details-category">
        <strong>Category:</strong> {product.category}
      </p>
      <p className="details-price">
        <strong>Price:</strong> ${product.price}
      </p>
      <p className="details-rating">
        <strong>Rating:</strong> ⭐ {product.rating?.rate || 0}
      </p>
      <p className="details-description">{product.description}</p>
    </div>
  );
}

export default ProductDetails;