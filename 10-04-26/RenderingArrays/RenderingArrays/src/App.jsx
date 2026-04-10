import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
       {  id:1,
          name:"Apple iMac 27, 1TB HDD, Retina 5K",
          price:169999,
          originalPrice:1999,
          discount:"35% OFF",
          rating:5.0,
          image:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Desktops/Images/311754_0_p4etiv.png",
          isBestSeller:true},
        { id:2,
          name:"Apple iPhone 17 Pro Max, 1TB",
          price:129999,
          rating:4.9,
          discount:"15% OFF",
          image:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/317417_0_7ISiBcc4Y.png?updatedAt=1757529273198",
          isBestSeller:true},
        { id:3,
          name:"iPad Pro 13-Inch (M4): XDR Display, 512GB",
          price:89999,
          rating:4.9,
          discount:"35% OFF",
          image:"https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264226_fefcjf.png"},
        { id:4,
          name:"PlayStation 5 Console - 1TB, PRO Controller",
          price:68999,
          rating:4.8,
          discount:"10% OFF",
          image:"https://media.tatacroma.com/Croma%20Assets/Gaming/Gaming%20Consoles/Images/305985_ilpfe3.png"
        }];
  return (
    <div className="app">
      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">
            Our most popular products loved by customers
          </p>
        </div>

        <div className="product-grid">
        {products.map((data) => (
          <ProductCard 
            image = {data.image}
            name = {data.name}
            price = {data.price}
            originalPrice = {data.originalPrice}
            discount = {data.discount}
            rating = {data.rating}
            isBestSeller= {data.isBestSeller}
            />)    
          )}; 
        </div>
      </section>
    </div>
  );
}

export default App;
