import { useEffect, useState, useMemo } from "react";

export default function ProductDetail({ productId, onClose }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [productId]);

  const discountedPrice = useMemo(() => {
    if (!product) return 0;
    return (
      product.price -
      (product.price * product.discountPercentage) / 100
    ).toFixed(2);
  }, [product]);

  const stockStatus = useMemo(() => {
    if (!product) return "";
    return product.stock <= 10 ? "Low Stock" : "In Stock";
  }, [product]);

  if (!product) return <p>Loading details...</p>;

  return (
    <div className="detail">
      <button onClick={onClose}>Close</button>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} />
      <p>Price: ₹{product.price}</p>
      <p>Discounted: ₹{discountedPrice}</p>
      <p>Status: {stockStatus}</p>
    </div>
  );
}