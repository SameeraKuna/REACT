import { useState } from "react";
import styles from "./Home.module.css";

function Home() {
  const [name, setName] = useState("");

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <h2 className={styles.h2}>Hello, {name} 👋</h2>}
    </div>
  );
}

export default Home;