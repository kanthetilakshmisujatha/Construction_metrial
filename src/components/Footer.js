// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <p>&copy; 2025 Construction Materials. All rights reserved.</p>
//         <div className="footer-info">
//           <p>📍 Location: Hyderabad, India</p>
//           <p>📞 Contact: +91 98765 43210</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 Construction Materials. All rights reserved.</p>
        
        <div className="footer-info">
          <p>📍 Location: Hyderabad, India</p>
          <p>📞 Contact: +91 98765 43210</p>
        </div>

        {/* Social Media Links */}
        <div className="social-icons">
          <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
