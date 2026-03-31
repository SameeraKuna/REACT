function ThankYou({ setPage }) {
  return (
    <div className="form">
      <h2>Thank You!</h2>
      <p>You have successfully submitted the form.</p>

      <button onClick={() => setPage("login")}>
        Go Back to Login
      </button>
    </div>
  );
}

export default ThankYou;