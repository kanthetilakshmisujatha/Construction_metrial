// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./settings.css"; // Add styles

// const Settings = () => {
//   const navigate = useNavigate();
//   const [blogs, setBlogs] = useState([
//     { id: 1, title: "AI in Construction", date: "25th Feb 2025", time: "3 PM" },
//     { id: 2, title: "Smart Material Selection", date: "28th Feb 2025", time: "5 PM" },
//     { id: 3, title: "Sustainable Building Practices", date: "5th March 2025", time: "2 PM" }
//   ]);

//   const [newBlog, setNewBlog] = useState({ title: "", date: "", time: "" });

//   // Function to add a blog
//   const addBlog = () => {
//     if (newBlog.title && newBlog.date && newBlog.time) {
//       setBlogs([...blogs, { id: blogs.length + 1, ...newBlog }]);
//       setNewBlog({ title: "", date: "", time: "" }); // Reset form
//     }
//   };

//   // Function to delete a blog
//   const deleteBlog = (id) => {
//     setBlogs(blogs.filter(blog => blog.id !== id));
//   };

//   return (
//     <div className="settings-container">
//       <h2>⚙️ Settings</h2>

//       {/* Add Blog Section */}
//       <div className="add-blog">
//         <h3>➕ Add a Blog</h3>
//         <input
//           type="text"
//           placeholder="Blog Title"
//           value={newBlog.title}
//           onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Date"
//           value={newBlog.date}
//           onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Time"
//           value={newBlog.time}
//           onChange={(e) => setNewBlog({ ...newBlog, time: e.target.value })}
//         />
//         <button onClick={addBlog}>Add Blog</button>
//       </div>

//       {/* Display Blogs */}
//       <div className="blog-list">
//         <h3>📌 Existing Blogs</h3>
//         {blogs.length === 0 ? <p>No blogs available.</p> : null}
//         {blogs.map((blog) => (
//           <div key={blog.id} className="blog-item">
//             <h4>{blog.title}</h4>
//             <p>📅 {blog.date} | 🕒 {blog.time}</p>
//             <button className="delete-button" onClick={() => deleteBlog(blog.id)}>❌ Delete</button>
//           </div>
//         ))}
//       </div>

//       <button className="back-button" onClick={() => navigate("/")}>🔙 Back to Dashboard</button>
//     </div>
//   );
// };

// export default Settings;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from localStorage on component mount
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  const [newBlog, setNewBlog] = useState({ title: "", date: "", time: "" });
  const [editIndex, setEditIndex] = useState(null);

  // Function to add a blog
  const addBlog = () => {
    if (newBlog.title && newBlog.date && newBlog.time) {
      let updatedBlogs;
      if (editIndex !== null) {
        // Update existing blog
        updatedBlogs = [...blogs];
        updatedBlogs[editIndex] = { ...newBlog, id: blogs[editIndex].id };
        setEditIndex(null);
      } else {
        // Add new blog
        updatedBlogs = [...blogs, { id: blogs.length + 1, ...newBlog }];
      }

      setBlogs(updatedBlogs);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Save to localStorage
      setNewBlog({ title: "", date: "", time: "" }); // Reset form
    }
  };

  // Function to delete a blog
  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Update localStorage
  };

  // Function to edit a blog
  const editBlog = (index) => {
    setNewBlog(blogs[index]);
    setEditIndex(index);
  };

  return (
    <div className="settings-container">
      <h2>⚙️ Settings</h2>

      {/* Add/Update Blog Section */}
      <div className="add-blog">
        <h3>{editIndex !== null ? "✏️ Update Blog" : "➕ Add a Blog"}</h3>
        <input
          type="text"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Date"
          value={newBlog.date}
          onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Time"
          value={newBlog.time}
          onChange={(e) => setNewBlog({ ...newBlog, time: e.target.value })}
        />
        <button onClick={addBlog}>{editIndex !== null ? "Update Blog" : "Add Blog"}</button>
      </div>

      {/* Display Blogs */}
      <div className="blog-list">
        <h3>📌 Existing Blogs</h3>
        {blogs.length === 0 ? <p>No blogs available.</p> : null}
        {blogs.map((blog, index) => (
          <div key={blog.id} className="blog-item">
            <h4>{blog.title}</h4>
            <p>📅 {blog.date} | 🕒 {blog.time}</p>
            <button className="edit-button" onClick={() => editBlog(index)}>✏️ Edit</button>
            <button className="delete-button" onClick={() => deleteBlog(blog.id)}>❌ Delete</button>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate("/")}>🔙 Back to Dashboard</button>
    </div>
  );
};

export default Settings;
