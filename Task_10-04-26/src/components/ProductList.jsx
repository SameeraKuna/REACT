import { useEffect, useState } from "react";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

const API_URL = "https://dummyjson.com/products?limit=20";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [text, setText] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_URL);

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const json = await res.json();
      console.log(json.products);

      setProducts(json.products);
    } catch (err) {
      setError(err.message && "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      {/* <SearchBar text={text} setText={setText}
       /> */}
      <h1>Product List</h1>

      {loading && <Loader />}

      {error && (
        <div style={{ color: "red" }}>
          <p>Error: {error}</p>
          <button onClick={fetchProducts}>Retry</button>
        </div>
      )}

      {products && !loading && !error && (
        <ul>
          {products.map((p) => {
            return <li key={p.id}>{p.brand} </li>;
          })}
        </ul>
      )}

      {/* {!loading && (
        <button onClick={fetchProducts} style={{ marginTop: 20 }}>
          Fetch Again
        </button>
      )} */}
    </div>
  );
}
