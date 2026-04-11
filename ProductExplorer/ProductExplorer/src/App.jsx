import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("https://dummyjson.com/products?limit=20");
      const data = await res.json();
      setProducts(data.products);
    } catch {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>🛒 Product Explorer</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      <SearchBar
        setProducts={setProducts}
        fetchDefault={fetchProducts}
        setLoading={setLoading}
      />

      <ProductList
        products={products}
        loading={loading}
        error={error}
        onRetry={fetchProducts}
        onSelect={setSelectedId}
      />

      {selectedId && (
        <ProductDetail
          productId={selectedId}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}