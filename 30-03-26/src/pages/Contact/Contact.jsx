import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <p>Email: abc@email.com</p>
      <p>Phone: 123-456-7890</p>
      <p>City: Bangalore</p>
    </div>
  );
}

export default Contact;