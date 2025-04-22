// import React, { useState } from 'react';
// import './Header.css';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Toggle menu visibility
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header-container">
//         <a href="/" className="logo">Construction Materials</a>
//         {/* Hamburger Menu for Mobile */}
//         <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//         <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
//           <a href="#home" className="nav-link">Home</a>
//           <a href="#aboutus" className="nav-link">About Us</a>
//           <a href="#materials" className="nav-link">Materials</a>
//           <a href="#contact" className="nav-link">Contact</a>
//           <a href="#recommendations" className="nav-link">Recommendations</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header-container">
//         <Link to="/" className="logo">Construction Materials</Link>
//         <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//         <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
//           <Link to="#home" className="nav-link">Home</Link>
//           <Link to="#aboutus" className="nav-link">About Us</Link>
//           <Link to="#materials" className="nav-link">Materials</Link>
//           <Link to="#contact" className="nav-link">Contact</Link>
//           <Link to="/recommendations" className="nav-link">Recommendations</Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">Construction Materials</a>
        {/* Hamburger Menu for Mobile */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#aboutus" className="nav-link">About Us</a>
          <a href="#materials" className="nav-link">Materials</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="/recommendations" className="nav-link">Recommendations</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;