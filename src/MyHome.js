// import React from 'react';
// // import Header from './components/Header';
// // import Footer from './components/Footer';
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import Contact from './components/Contact';
// import Materials from './components/Materials';
// import Blogs from './components/Blogs';

// const MyHome = () => {
//   return (
//     <div>

//       <Home />
//       <AboutUs />
//       <Materials />
//       <Blogs/>
//       <Contact />

//     </div>
//   );
// };

// export default MyHome;import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Materials from './components/Materials';
import Blogs from './components/Blogs';

const MyHome = ({ addQuery }) => {
  return (
    <div>
      <Home />
      <AboutUs />
      <Materials />
      <Blogs />
      <Contact addQuery={addQuery} />  {/* 🔹 Pass addQuery to Contact */}
    </div>
  );
};

export default MyHome;
