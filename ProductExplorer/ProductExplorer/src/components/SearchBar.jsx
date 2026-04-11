import { useEffect, useRef } from "react";

export default function SearchBar({ setProducts, fetchDefault, setLoading }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = async (query) => {
    if (!query) {
      fetchDefault();
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`,
      );
      const data = await res.json();
      setProducts(data.products);
    } finally {
      setLoading(false);
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search products..."
      onClick={(e) => e.stopPropagation()}
      onChange={(e) => handleSearch(e.target.value)}
      autoComplete="off"
    />
  );
}
