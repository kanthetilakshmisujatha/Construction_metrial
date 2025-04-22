import React, { useState, useEffect } from "react";
import "./AddMaterial.css";

const AddMaterial = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [materials, setMaterials] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load Materials from Local Storage
  useEffect(() => {
    const storedMaterials = JSON.parse(localStorage.getItem("materials")) || [];
    setMaterials(storedMaterials);
  }, []);

  // Save Materials to Local Storage
  const saveMaterials = (updatedMaterials) => {
    localStorage.setItem("materials", JSON.stringify(updatedMaterials));
    setMaterials(updatedMaterials);
  };

  // Convert Image to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle Add Material
  const handleAddMaterial = async () => {
    if (!name || !image || !description) {
      alert("Please fill all fields");
      return;
    }

    const base64Image = await convertToBase64(image);
    const newMaterial = { name, img: base64Image, desc: description };
    const updatedMaterials = [...materials, newMaterial];

    saveMaterials(updatedMaterials);
    setName("");
    setImage(null);
    setDescription("");
  };

  // Handle Delete Material
  const handleDelete = (index) => {
    const updatedMaterials = materials.filter((_, i) => i !== index);
    saveMaterials(updatedMaterials);
  };

  // Handle Edit Material
  const handleEdit = (index) => {
    setEditIndex(index);
    setName(materials[index].name);
    setDescription(materials[index].desc);
  };

  // Save Edited Material
  const handleSaveEdit = () => {
    if (editIndex !== null) {
      const updatedMaterials = materials.map((item, i) =>
        i === editIndex ? { ...item, name, desc: description } : item
      );
      saveMaterials(updatedMaterials);
      setEditIndex(null);
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="add-material-container">
      <h2>Manage Materials</h2>

      {/* 📌 Add/Edit Form */}
      <div className="add-material-form">
        <input
          type="text"
          placeholder="Material Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {editIndex !== null ? (
          <button onClick={handleSaveEdit} className="edit-btn">
            Save Changes
          </button>
        ) : (
          <button onClick={handleAddMaterial} className="add-btn">
            Add Material
          </button>
        )}
      </div>

      {/* 📜 Materials List */}
      <div className="material-list">
        {materials.map((material, index) => (
          <div key={index} className="material-card">
            <img src={material.img} alt={material.name} />
            <h3>{material.name}</h3>
            <p>{material.desc}</p>
            <div className="card-buttons">
              <button className="edit-btn" onClick={() => handleEdit(index)}>
                ✏️ Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(index)}>
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddMaterial;
