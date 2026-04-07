import { useEffect, useState } from "react";

function Fetchdata() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {setUsers(data);
    console.log(data);})
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Fetchdata;