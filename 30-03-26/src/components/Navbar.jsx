import styles from "./Navbar.module.css";

function Navbar({ activePage, setActivePage, theme, toggleTheme }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <button
          className={activePage === "home" ? styles.active : ""}
          onClick={() => setActivePage("home")}>
          Home
        </button>

        <button
          className={activePage === "about" ? styles.active : ""}
          onClick={() => setActivePage("about")}>
          About
        </button>

        <button
          className={activePage === "contact" ? styles.active : ""}
          onClick={() => setActivePage("contact")}>
          Contact
        </button>
      </div>

      <button onClick={toggleTheme}>
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;