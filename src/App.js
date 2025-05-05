
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import MyHome from "./MyHome";
import Schedule from "./components/Schedule";  
import ViewQueries from "./components/ViewQueries"; 
import AddMaterial from "./components/AddMaterial";
import Recommendations from "./components/Recommendations";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const storedQueries = JSON.parse(localStorage.getItem("queries")) || [];
    setQueries(storedQueries);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const addQuery = (query) => {
    const updatedQueries = [...queries, query];
    setQueries(updatedQueries);
    localStorage.setItem("queries", JSON.stringify(updatedQueries));
  };

  return (
    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/myhome"
          element={isLoggedIn ? <MyHome addQuery={addQuery} /> : <Navigate to="/login" />}
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/add-material" element={<AddMaterial />} />
        <Route path="/view-queries" element={<ViewQueries queries={queries} />} />
        <Route path="/recommendations" element={<Recommendations />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
