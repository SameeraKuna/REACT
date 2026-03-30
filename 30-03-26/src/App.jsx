import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import styles from "./App.module.css";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const renderPage = () => {
    if (activePage === "home") return <Home />;
    if (activePage === "about") return <About />;
    if (activePage === "contact") return <Contact />;
  };

  return (
    <div className={theme === "light" ? styles.light : styles.dark}>
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {renderPage()}
    </div>
  );
}

export default App;