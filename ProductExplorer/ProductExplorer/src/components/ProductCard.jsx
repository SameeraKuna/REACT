export default function ProductCard({ product, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-img">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
      <p>⭐ {product.rating}</p>
      <small>{product.category}</small>
    </div>
  );
}