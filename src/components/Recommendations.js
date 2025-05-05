
import React, { useState } from "react";
import axios from "axios";
import "./Recommendations.css"; // Make sure this CSS file exists

const Recommendations = () => {
  const [environment, setEnvironment] = useState("urban");
  const [budget, setBudget] = useState(500);
  const [type, setType] = useState("house");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null); // Clear previous result

    try {
      const response = await axios.post("https://construction-metrial.onrender.com/recommend-material", {
        environment,
        budget: parseInt(budget),
        type,
      });
      setResult(response.data);
    } catch (error) {
      setResult(error.response?.data || { message: "Error fetching recommendations" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Construction Material Recommendation</h2>

        <label>Environment:</label>
        <select className="select" value={environment} onChange={(e) => setEnvironment(e.target.value)}>
          <option value="urban">Urban</option>
          <option value="rural">Rural</option>
          <option value="cold climate">Cold Climate</option>
          <option value="warm climate">Warm Climate</option>
          <option value="eco-friendly">Eco-Friendly</option>
        </select>

        <label>Budget:</label>
        <input
          type="number"
          placeholder="Enter Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="input"
          min="1"
        />

        <label>Type:</label>
        <select className="select" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="house">House</option>
          <option value="skyscraper">Skyscraper</option>
        </select>

        <button onClick={handleSubmit} className="button" disabled={loading}>
          {loading ? "Loading..." : "Get Recommendation"}
        </button>

        {result && (
          <div className="result">
            <h3>Recommendation:</h3>
            {result.recommended_material ? (
              <p>
                <strong>Material:</strong> {result.recommended_material} <br />
                <strong>Cost:</strong> ${result.cost} <br />
                <strong>Durability:</strong> {result.durability} <br />
                <strong>Fire Resistance:</strong> {result.fire_resistance} <br />
                <strong>Eco Score:</strong> {result.eco_score} <br />
                <strong>Suitability:</strong> {result.suitability || "N/A"}
              </p>
            ) : (
              <p className="error">{result.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
