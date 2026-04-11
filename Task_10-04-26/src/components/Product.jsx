import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Loader from "./Loader";
function Product({products}) {
    const [loading, setLoading] = useState(false);
  return (
    <section>
      <h2>Products</h2>
       setLoading = {true};
      {loading ? <Loader /> : (
        <ul>
          {products.map((p) => (
            <li key={p.id}>{p.title}</li>
            
          ))}
        </ul>
      )}
    </section>
  );
}

export default Product;