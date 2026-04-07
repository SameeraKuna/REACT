import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h2>Page not found</h2>
    <Link to="/users">Back to users</Link>
  </div>
);

export default NotFound;