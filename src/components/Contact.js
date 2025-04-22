// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (could send to backend, etc.)
//     alert('Message sent!');
//   };

//   return (
//     <section id="contact" className="contact">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <textarea
//           placeholder="Your Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="submit" className="btn">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (name && email && message) {
//       // Get existing queries from localStorage
//       const existingQueries = JSON.parse(localStorage.getItem("queries")) || [];

//       // Create new query object
//       const newQuery = { id: existingQueries.length + 1, name, email, message };

//       // Update localStorage with new query
//       const updatedQueries = [...existingQueries, newQuery];
//       localStorage.setItem("queries", JSON.stringify(updatedQueries));

//       alert("Message sent!");

//       // Clear form fields
//       setName('');
//       setEmail('');
//       setMessage('');
//     } else {
//       alert("Please fill all fields before submitting!");
//     }
//   };

//   return (
//     <section id="contact" className="contact">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <textarea
//           placeholder="Your Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="submit" className="btn">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import "./Contact.css";

const Contact = ({ addQuery }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newQuery = { name, email, message };

    addQuery(newQuery); // 🔹 Send query to App.js

    // Reset form
    setName("");
    setEmail("");
    setMessage("");

    alert("Message sent!");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your query"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
