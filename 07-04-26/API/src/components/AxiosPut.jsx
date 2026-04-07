import axios from "axios";
import { useState } from "react";

function AxiosPut() {
  const [post, setPost] = useState({
    id: 1, // ID of the post you want to update
    title: "Updated Title",
    body: "Updated content"
  });
  const [responseData, setResponseData] = useState(null);

  const handleUpdate = () => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      title: post.title,
      body: post.body
    })
    .then(response => {
      console.log("Updated data:", response.data);
      setResponseData(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <h1>Update Post</h1>
      <button onClick={handleUpdate}>Update Post</button>

      {responseData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Title: {responseData.title}</h2>
          <p>Content: {responseData.body}</p>
        </div>
      )}
    </div>
  );
}

export default AxiosPut;