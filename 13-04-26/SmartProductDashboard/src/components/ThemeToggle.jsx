import { useTheme } from "../context/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark" : "🌞 Light"} Mode
    </button>
  );
}

export default ThemeToggle;