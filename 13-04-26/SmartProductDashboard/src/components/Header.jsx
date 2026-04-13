import FavoritesBadge from "./FavoritesBadge";
import ThemeToggle from "./ThemeToggle";

function Header({ favoritesCount }) {
  return (
    <header className="header">
      <div>
        <h1 className="app-title">Smart Product Dashboard</h1>
        <p className="subtitle">Learn React hooks through a real-world mini project</p>
      </div>

      <div className="header-actions">
        <FavoritesBadge count={favoritesCount} />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;