
import React, { useState, useEffect } from "react";
import "./Materials.css"; // Importing CSS file

const Material = () => {
  const [materials, setMaterials] = useState([]);
  const [search, setSearch] = useState("");

  // Load materials from Local Storage on component mount
  useEffect(() => {
    const storedMaterials = JSON.parse(localStorage.getItem("materials")) || [];
    setMaterials(storedMaterials);
  }, []);

  return (
    <section id="materials">
    <div className="material-container">
      <h2 className="title">🛠️ Available Materials</h2>

      {/* 🔍 Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search materials..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* 📜 Materials List */}
      <div className="material-list">
        {materials.length === 0 ? (
          <p className="no-materials">No materials found. Add materials to display.</p>
        ) : (
          materials
            .filter((material) =>
              material.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((material, index) => (
              <div key={index} className="material-card">
                <img src={material.img} alt={material.name} className="material-img" />
                <h3>{material.name}</h3>
                <p>{material.desc}</p>
              </div>
            ))
        )}
      </div>
    </div>
    </section>
  );
};

export default Material;
