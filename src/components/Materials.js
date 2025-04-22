// import React, { useState } from 'react';
// import './Materials.css';
// import { FaSearch } from 'react-icons/fa'; // Importing the search icon

// const Materials = () => {
//   const [showMore, setShowMore] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleViewMore = () => {
//     setShowMore(!showMore);
//   };

//   // Material data array
//   const materials = [
//     { name: "Wood", img: "wood.jpg", desc: "Strong and durable for framework." },
//     { name: "Cement", img: "ciment.jpeg", desc: "Used for construction and foundation." },
//     { name: "Tiles", img: "tiels.jpg", desc: "Durable and decorative for flooring." },
//     { name: "Steel", img: "steel.jpg", desc: "Strong and versatile for construction." },
//     { name: "Bricks", img: "bricks.jpg", desc: "Perfect for building solid structures." },
//     { name: "Plastic", img: "plastic.jpg", desc: "Lightweight and reusable for construction." },
//     { name: "Sand", img: "sand.jpg", desc: "Essential for concrete and mortar." },
//     { name: "Glass", img: "glass.jpg", desc: "Used for windows and decorative features." }
//   ];

//   // Filter materials based on search term
//   const filteredMaterials = materials.filter(material =>
//     material.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section id="materials" className="materials">
//       <h2>Available Materials</h2>

//       {/* 🔍 Search Bar with Icon */}
//       <div className="search-bar">
//         <FaSearch className="search-icon" />
//         <input
//           type="text"
//           placeholder="Search materials..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="material-list">
//         {filteredMaterials.map((material, index) => (
//           <div key={index} className="material-card">
//             <img src={material.img} alt={material.name} />
//             <h3>{material.name}</h3>
//             <p>{material.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Materials;
// import React, { useState, useEffect } from "react";
// // import { FaSearch } from "react-icons/fa"; // Import FontAwesome Search Icon
// import "./Materials.css";

// const Material = () => {
//   const [materials, setMaterials] = useState([]);
//   // const [search, setSearch] = useState("");

//   // Load materials from Local Storage
//   useEffect(() => {
//     const storedMaterials = JSON.parse(localStorage.getItem("materials")) || [];
//     setMaterials(storedMaterials);
//   }, []);

//   return (
//     <div className="material-container">
//       <h2 className="title">🛠️ Construction Materials</h2>

//       {/* 🔍 Stylish Search Bar */}
//       <div className="search-container">
    
//         <input
//           type="text"
//           placeholder="Search materials..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search-bar"
//         />
//       </div>

//       {/* 📜 Materials List */}
//       <div className="material-list">
//         {materials
//           .filter((material) =>
//             material.name.toLowerCase().includes(search.toLowerCase())
//           )
//           .map((material, index) => (
//             <div key={index} className="material-card">
//               <img src={material.img} alt={material.name} className="material-img" />
//               <h3>{material.name}</h3>
//               <p>{material.desc}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Material;
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
