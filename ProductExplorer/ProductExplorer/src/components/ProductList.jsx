import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  loading,
  error,
  onRetry,
  onSelect
}) {
  if (loading) return <p>Loading products...</p>;

  if (error)
    return (
      <>
        <p>{error}</p>
        <button onClick={onRetry}>Retry</button>
      </>
    );

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onClick={() => onSelect(p.id)}
        />
      ))}
    </div>
  );
}
