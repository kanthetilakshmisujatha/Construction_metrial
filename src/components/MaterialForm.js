import React, { useState } from "react";
import axios from "axios";

const MaterialForm = () => {
  const [projectDetails, setProjectDetails] = useState({
    projectType: "",
    budget: "",
    environment: "",
  });

  const [recommendations, setRecommendations] = useState([]);

  const handleChange = (e) => {
    setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5002/recommend", projectDetails);
    setRecommendations(response.data);
  };

  return (
    <div>
      <h2>Construction Material Recommendation</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="projectType" placeholder="Project Type" onChange={handleChange} required />
        <input type="number" name="budget" placeholder="Budget ($)" onChange={handleChange} required />
        <input type="text" name="environment" placeholder="Environment (humid/dry/etc.)" onChange={handleChange} required />
        <button type="submit">Get Recommendations</button>
      </form>
      
      {recommendations.length > 0 && (
        <div>
          <h3>Recommended Materials:</h3>
          <ul>
            {recommendations.map((material, index) => (
              <li key={index}>{material.name} - ${material.cost}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MaterialForm;
