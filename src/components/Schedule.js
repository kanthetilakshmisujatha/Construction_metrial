// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./schedulepage.css";

// const Schedule = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="schedule-container">
//       <h2>📅 Session Schedule</h2>
//       <p>Check out our upcoming expert sessions and plan accordingly.</p>

//       <div className="session-list">
//         <div className="session-item">
//           <h3>🔹 AI in Construction</h3>
//           <p>📅 Date: 25th Feb 2025 | 🕒 Time: 3 PM</p>
//         </div>
//         <div className="session-item">
//           <h3>🔹 Smart Material Selection</h3>
//           <p>📅 Date: 28th Feb 2025 | 🕒 Time: 5 PM</p>
//         </div>
//         <div className="session-item">
//           <h3>🔹 Sustainable Building Practices</h3>
//           <p>📅 Date: 5th March 2025 | 🕒 Time: 2 PM</p>
//         </div>
//       </div>

//       <button className="back-button" onClick={() => navigate(-1)}>
//         🔙 Back
//       </button>
//     </div>
//   );
// };

// export default Schedule;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./schedulepage.css";

const Schedule = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from localStorage
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className="schedule-container">
      <h2>📅 Session Schedule</h2>
      <p>Check out our upcoming expert sessions and plan accordingly.</p>

      <div className="session-list">
        {blogs.length === 0 ? <p>No upcoming sessions available.</p> : null}
        {blogs.map((blog) => (
          <div key={blog.id} className="session-item">
            <h3>🔹 {blog.title}</h3>
            <p>📅 Date: {blog.date} | 🕒 Time: {blog.time}</p>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>🔙 Back</button>
    </div>
  );
};

export default Schedule;
