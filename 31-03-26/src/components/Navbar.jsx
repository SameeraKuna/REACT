function Navbar({ page, setPage, theme, toggleTheme }) {
  return (
    <div className="navbar">
      <h2>My React Application</h2>

      <div className="nav-links">
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("signup")}>Signup</button>
      </div>
      <button onClick={toggleTheme}>
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default Navbar;