import { useCallback, useEffect, useMemo, useRef, useState,} from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ProductList from "../components/ProductList";
import ProductDetails from "../components/ProductDetails";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { getProducts } from "../services/productService";
import { getCategories } from "../utils/getCategories";
import { filterProducts } from "../utils/filterProducts";
import { sortProducts } from "../utils/sortProducts";

function Dashboard() {
  // =========================
  // STATE
  // =========================
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // =========================
  // REF
  // =========================
  const searchInputRef = useRef(null);

  // =========================
  // EFFECT 1: FETCH PRODUCTS
  // =========================
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts();
        setProducts(data);

        // Optional: select first product by default
        if (data.length > 0) {
          setSelectedProduct(data[0]);
        }
      } catch {
        setError("Unable to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // =========================
  // EFFECT 2: LOAD FAVORITES FROM LOCAL STORAGE
  // =========================
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");

    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Error parsing saved favorites:", error);
      }
    }
  }, []);

  // =========================
  // EFFECT 3: SAVE FAVORITES TO LOCAL STORAGE
  // =========================
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // =========================
  // EFFECT 4: AUTO-FOCUS SEARCH INPUT
  // =========================
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  // =========================
  // EFFECT 5: UPDATE DOCUMENT TITLE
  // =========================
  useEffect(() => {
    if (selectedProduct) {
      document.title = `Viewing: ${selectedProduct.title}`;
    } else {
      document.title = `Smart Product Dashboard (${favorites.length} favorites)`;
    }
  }, [selectedProduct, favorites.length]);

  // =========================
  // MEMOIZED CATEGORIES
  // =========================
  const categories = useMemo(() => {
    return getCategories(products);
  }, [products]);

  // =========================
  // MEMOIZED VISIBLE PRODUCTS
  // =========================
  const visibleProducts = useMemo(() => {
    const filtered = filterProducts(products, searchTerm, selectedCategory);
    const sorted = sortProducts(filtered, sortBy);
    return sorted;
  }, [products, searchTerm, selectedCategory, sortBy]);

  // =========================
  // CALLBACKS
  // =========================
  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleCategoryChange = useCallback((event) => {
    setSelectedCategory(event.target.value);
  }, []);

  const handleSortChange = useCallback((event) => {
    setSortBy(event.target.value);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortBy("default");
  }, []);

  const handleSelectProduct = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const handleToggleFavorite = useCallback((productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  }, []);

  // =========================
  // CONDITIONAL UI
  // =========================
  if (loading) {
    return (
      <div className="page-container">
        <Header favoritesCount={favorites.length} />
        <Loading message="Loading products..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <Header favoritesCount={favorites.length} />
        <ErrorMessage message={error} />
      </div>
    );
  }

  // =========================
  // MAIN UI
  // =========================
  return (
    <div className="page-container">
      <Header favoritesCount={favorites.length} />

      <div className="controls-section">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          inputRef={searchInputRef}
        />

        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          onClearFilters={handleClearFilters}
        />
      </div>

      <div className="content-layout">
        <div className="left-panel">
          <ProductList
            products={visibleProducts}
            favorites={favorites}
            onSelectProduct={handleSelectProduct}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>

        <div className="right-panel">
          <ProductDetails product={selectedProduct} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;