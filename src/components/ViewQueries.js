import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewQueries.css";

const ViewQueries = () => {
  const navigate = useNavigate();
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    // Fetch queries from localStorage
    const storedQueries = JSON.parse(localStorage.getItem("queries")) || [];
    setQueries(storedQueries);
  }, []);

  // Function to handle sending a response
  const handleSendResponse = (query) => {
    const responseMessage = prompt(`Reply to ${query.name}:`, "Type your response here...");
    if (responseMessage) {
      alert(`Response sent to ${query.email}: ${responseMessage}`);
    }
  };

  // Function to delete a query
  const handleDeleteQuery = (index) => {
    const updatedQueries = [...queries];
    updatedQueries.splice(index, 1);
    setQueries(updatedQueries);
    localStorage.setItem("queries", JSON.stringify(updatedQueries));
  };

  return (
    <div className="queries-container">
      <h2>📩 User Queries</h2>
      {queries.length === 0 ? (
        <p>No queries found.</p>
      ) : (
        <ul>
          {queries.map((query, index) => (
            <li key={index} className="query-item">
              <strong>📌 {query.name}</strong> ({query.email})
              <p>📝 {query.message}</p>
              <button className="response-button" onClick={() => handleSendResponse(query)}>
                ✉️ Send Response
              </button>
              <button className="delete-button" onClick={() => handleDeleteQuery(index)}>
                ❌ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <button className="back-button" onClick={() => navigate("/")}>
        🔙 Back to Dashboard
      </button>
    </div>
  );
};

export default ViewQueries;
