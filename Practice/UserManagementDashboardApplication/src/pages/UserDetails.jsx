import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Snackbar from "../components/Snackbar";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(res.data.data);
      } catch {
        setError("Failed to load user");
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <Loader />;

  return (
    <>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <p>{user.email}</p>

      {error && (
        <Snackbar type="error" message={error} onClose={() => setError("")} />
      )}
    </>
  );
}
