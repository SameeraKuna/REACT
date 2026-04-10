import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";
import Snackbar from "../components/Snackbar";

export default function Users({ newUser }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "error",
  });

  const search = searchParams.get("search") || "";

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(res.data.data);
    } catch (err) {
      console.error(err);

      setSnackbar({
        open: true,
        message: "Failed to fetch users",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    return () => {};
  }, []);

  const filteredUsers = users.filter((u) =>
    `${u.first_name} ${u.last_name}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  if (loading) return <Loader />;

  return (
    <>
      <Snackbar />
      <input
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearchParams({ search: e.target.value })}
      />

      <table>
        <tbody>
          {newUser && (
            <tr>
              <td>{newUser.name}</td>
              <td>{newUser.email}</td>
            </tr>
          )}
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td>
                <Link to={`/users/${u.id}`}>
                  {u.first_name} {u.last_name}
                </Link>
              </td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

        <Snackbar
          open={snackbar.open}
          message={snackbar.message}
          type={snackbar.type}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          onRetry={fetchUsers}
        />
     
    </>
  );
}
