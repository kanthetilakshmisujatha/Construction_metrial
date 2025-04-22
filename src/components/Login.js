// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       setMessage(response.data.message); // ✅ Show success message
//     } catch (error) {
//       setMessage(error.response?.data?.error || "❌ Login failed");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin} style={styles.form}>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Login</button>
//       </form>
//       {message && <p style={styles.message}>{message}</p>}
//     </div>
//   );
// };

// // Basic styles
// const styles = {
//   container: { textAlign: "center", marginTop: "50px" },
//   form: { display: "flex", flexDirection: "column", width: "300px", margin: "auto" },
//   input: { marginBottom: "10px", padding: "10px", fontSize: "16px" },
//   button: { padding: "10px", fontSize: "16px", cursor: "pointer", backgroundColor: "#007bff", color: "#fff", border: "none" },
//   message: { marginTop: "10px", fontWeight: "bold", color: "red" },
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("https://construction-metrial-2.onrender.com", {
        email,
        password,
      });

      if (response.data.success) {
        onLogin();
        navigate("/myhome");
      } else {
        setMessage("❌ Invalid Credentials");
      }
    } catch (error) {
      setMessage(error.response?.data?.error || "❌ Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
            className="input-field"
          />
          {message && <p style={styles.error}>{message}</p>}
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

// ✅ Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,abstract')", // 🌟 Background Image
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    width: "350px",
    padding: "30px",
    background: "rgba(255, 255, 255, 0.9)", // Slightly transparent background
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
    backgroundColor: "#ff6347", // 🍅 Tomato Red Button
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

// 🔥 Add Hover & Focus Effects using CSS
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  .input-field:hover, .input-field:focus {
    border-color: #ff6347 !important;
    box-shadow: 0 0 8px rgba(255, 99, 71, 0.6) !important;
    transition: all 0.3s ease-in-out !important;
  }
  .input-field::placeholder {
    color: #999;
  }
  .input-field:focus::placeholder {
    color: #ff6347;
  }
  button:hover {
    background-color: #d63f27 !important;
  }
`;
document.head.appendChild(styleSheet);

export default Login;
