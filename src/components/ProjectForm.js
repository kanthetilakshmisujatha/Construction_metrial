// import React from 'react';
// import './MaterialList.css';

// const MaterialList = ({ materials }) => {
//     return (
//         <div className="material-list">
//             <h2>Recommended Materials</h2>
//             <ul>
//                 {materials.map((material, index) => (
//                     <li key={index} className="material-card">
//                         <h3>{material.name}</h3>
//                         <p><strong>Cost:</strong> ${material.cost}</p>
//                         <p><strong>Durability:</strong> {material.durability}/10</p>
//                         <p><strong>Supplier:</strong> {material.supplier}</p>
//                         <p><strong>Availability:</strong> {material.availability}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default MaterialList;
import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [budget, setBudget] = useState('');
  const [environmentalConditions, setEnvironmentalConditions] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/recommend', {
      budget,
      environmentalConditions
    });
    setRecommendations(response.data);
  };

  return (
    <div className="form-container">
      <h1>Construction Material Recommendation</h1>
      <form onSubmit={handleSubmit}>
        <label>Project Name</label>
        <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />

        <label>Budget</label>
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />

        <label>Environmental Conditions</label>
        <input type="text" value={environmentalConditions} onChange={(e) => setEnvironmentalConditions(e.target.value)} />

        <button type="submit">Get Recommendations</button>
      </form>

      <div className="recommendations">
        <h2>Recommended Materials:</h2>
        <ul>
          {recommendations.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectForm;
