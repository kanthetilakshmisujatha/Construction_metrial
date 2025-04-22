import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "12345") {
      alert("Admin Login Successful!");
      navigate("/dashboard"); // Redirect to Admin Dashboard
    } else {
      setError("Invalid admin credentials!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Admin Login</h1>
        <form onSubmit={handleAdminLogin} style={styles.form}>
          <label style={styles.label}>Admin Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f5f5f5",
  },
  card: {
    width: "400px",
    padding: "30px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
  },
  input: {
    marginBottom: "15px",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
    transition: "all 0.3s",
  },
  button: {
    padding: "12px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#ff6347",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    transition: "all 0.3s",
  },
  error: {
    marginTop: "10px",
    color: "red",
    fontWeight: "bold",
  },
};

export default AdminLogin;
