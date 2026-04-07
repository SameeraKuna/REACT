import axios from "axios";
import { useEffect, useState } from "react";

function AxiosGet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {data.map(post => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h2>Title: {post.title}</h2>
          <p>Content: {post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default AxiosGet;