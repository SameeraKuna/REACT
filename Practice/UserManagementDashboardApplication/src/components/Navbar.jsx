import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/register">Register</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}