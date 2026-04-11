
import ProductList from "./components/ProductList";
// import { useTheme } from "./components/ThemeContext";

function App() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <>
    {/* <div className={`app ${theme}`}> */}
     {/* <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <p>Current Theme: {theme}</p>
    </div> */}
    <ProductList />
    </>
  );
}

export default App;