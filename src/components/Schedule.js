
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
