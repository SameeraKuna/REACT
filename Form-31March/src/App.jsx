import {useState} from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ThankYou from "./pages/ThankYou";
import './App.css';

function App() {
  const [page, setPage] = useState("login");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const renderPage = () => {
    if (page === "login") return <Login setPage={setPage} />
    if (page === "signup") return <SignUp setPage={setPage} />;
    if (page === "thankyou") return <ThankYou setPage={setPage} />;
  }
  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <Navbar page ={page} setPage={setPage} theme={theme}  toggleTheme={toggleTheme}/>
      {renderPage()}
    </div>
  )
}

export default App;
