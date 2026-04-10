import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "users/:id", element: <UserDetails /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

export default router;