import axios from "axios";
import { useState } from "react";

function AxiosPost() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
      userId: 1 
    };

    axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then(response => {
        console.log("Post created:", response.data);
        setData([response.data, ...data]);
        setTitle("");
        setBody("");
      })
      .catch(error => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Posts</h2>
      {data.map(post => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h3>Title: {post.title}</h3>
          <p>Content: {post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default AxiosPost;