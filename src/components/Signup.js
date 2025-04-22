// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/auth/signup', // Ensure this matches backend
//         { name, email, password, phone },
//         { headers: { 'Content-Type': 'application/json' } }
//       );

//       if (response.status === 201) {
//         alert('Signup successful! Please login.');
//         navigate('/login');
//       }
//     } catch (err) {
//       console.error("Signup Error:", err.response?.data);
//       setError(err.response?.data?.error || 'Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSignup}>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <label>Phone:</label>
//         <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };
// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     background: "linear-gradient(to right, #00c6ff, #0072ff)", 
//   },
//   card: {
//     width: "400px",
//     padding: "30px",
//     background: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//   },
//   title: {
//     marginBottom: "20px",
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#333",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   label: {
//     textAlign: "left",
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: "5px",
//   },
//   input: {
//     marginBottom: "15px",
//     padding: "12px",
//     fontSize: "16px",
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//     outline: "none",
//     transition: "all 0.3s",
//   },
//   button: {
//     padding: "12px",
//     fontSize: "18px",
//     cursor: "pointer",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     transition: "all 0.3s",
//   },
//   error: {
//     marginTop: "10px",
//     color: "red",
//     fontWeight: "bold",
//   },
// };

// // ✨ Smooth Hover Effects
// styles.input[":focus"] = { borderColor: "#007bff", boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)" };
// styles.button[":hover"] = { backgroundColor: "#0056b3" };

// export default Signup;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/auth/signup', 
//         { name, email, password, phone },
//         { headers: { 'Content-Type': 'application/json' } }
//       );

//       if (response.status === 201) {
//         alert('Signup successful! Please login.');
//         navigate('/login');
//       }
//     } catch (err) {
//       console.error("Signup Error:", err.response?.data);
//       setError(err.response?.data?.error || 'Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h1 style={styles.title}>Sign Up</h1>
//         <form onSubmit={handleSignup} style={styles.form}>
//           <label style={styles.label}>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={styles.input} />

//           <label style={styles.label}>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={styles.input} />

//           <label style={styles.label}>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={styles.input} />

//           <label style={styles.label}>Phone:</label>
//           <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required style={styles.input} />

//           {error && <p style={styles.error}>{error}</p>}
          
//           <button type="submit" style={styles.button}>Sign Up</button>
//         </form>

//         {/* 👇 Login Link Added */}
//         <p style={styles.loginText}>
//           Already have an account? <span style={styles.loginLink} onClick={() => navigate('/login')}>Login</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// // 🌟 Stylish UI with Tomato Button
// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     background: "#f5f5f5", // Removed gradient background
//   },
//   card: {
//     width: "400px",
//     padding: "30px",
//     background: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//   },
//   title: {
//     marginBottom: "20px",
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#333",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   label: {
//     textAlign: "left",
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: "5px",
//   },
//   input: {
//     marginBottom: "15px",
//     padding: "12px",
//     fontSize: "16px",
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//     outline: "none",
//     transition: "all 0.3s",
//   },
//   button: {
//     padding: "12px",
//     fontSize: "18px",
//     cursor: "pointer",
//     backgroundColor: "tomato", // Changed to tomato
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     transition: "all 0.3s",
//   },
//   error: {
//     marginTop: "10px",
//     color: "red",
//     fontWeight: "bold",
//   },
//   loginText: {
//     marginTop: "15px",
//     fontSize: "16px",
//     color: "#333",
//   },
//   loginLink: {
//     color: "tomato",
//     fontWeight: "bold",
//     cursor: "pointer",
//     textDecoration: "underline",
//   },
// };

// export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/signup', 
        { name, email, password, phone },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 201) {
        alert('Signup successful! Please login.');
        navigate('/login');
      }
    } catch (err) {
      console.error("Signup Error:", err.response?.data);
      setError(err.response?.data?.error || 'Signup failed. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Sign Up</h1>
        <form onSubmit={handleSignup} style={styles.form}>
          <label style={styles.label}>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={styles.input} />

          <label style={styles.label}>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={styles.input} />

          <label style={styles.label}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={styles.input} />

          <label style={styles.label}>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required style={styles.input} />

          {error && <p style={styles.error}>{error}</p>}
          
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>

        {/* 👇 Login and Admin Links */}
        <p style={styles.loginText}>
          Already have an account? <span style={styles.loginLink} onClick={() => navigate('/login')}>Login</span>
        </p>

        <p style={styles.adminText}>
          Admin? <span style={styles.adminLink} onClick={() => navigate('/admin-login')}>Click here</span>
        </p>
      </div>
    </div>
  );
};

// 🌟 Stylish UI with Tomato Button
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
    backgroundColor: "tomato",
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
  loginText: {
    marginTop: "15px",
    fontSize: "16px",
    color: "#333",
  },
  loginLink: {
    color: "tomato",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  },
  adminText: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#333",
  },
  adminLink: {
    color: "#ff6347",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Signup;
