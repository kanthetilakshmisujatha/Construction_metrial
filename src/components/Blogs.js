import React from "react";
import { useNavigate } from "react-router-dom";
import "./blogs.css";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="blogs-container">
      <h2>📖 Latest Blogs & Articles</h2>
      <div className="blog-item">
        <h3>How AI is Transforming Construction</h3>
        <p>Discover how AI helps in material selection and sustainability.</p>
        <button className="read-more" onClick={() => navigate("/schedule")}>
          Read More →
        </button>
      </div>
    </div>
  );
};

export default Blogs;
