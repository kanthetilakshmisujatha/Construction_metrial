import React, { useState } from "react";
import { motion } from "framer-motion";

const ExploreCards = () => {
  const [showCards, setShowCards] = useState(false);

  const toggleCards = () => {
    setShowCards(!showCards);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <button
        onClick={toggleCards}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        {showCards ? "Hide" : "Explore"}
      </button>

      {showCards && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {/* Card 1 - Achievements */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center w-72"
          >
            <h3 className="text-xl font-bold">🏆 Our Achievements</h3>
            <p className="mt-2 text-gray-600">
              - Best Startup 2023 <br />
              - 500+ Clients <br />
              - 5M+ Users Worldwide
            </p>
          </motion.div>

          {/* Card 2 - Meet the Team */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center w-72"
          >
            <h3 className="text-xl font-bold">👥 Meet the Team</h3>
            <p className="mt-2 text-gray-600">
              - CEO: John Doe <br />
              - CTO: Jane Smith <br />
              - Lead Dev: Alice Johnson
            </p>
          </motion.div>

          {/* Card 3 - Our Clients */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center w-72"
          >
            <h3 className="text-xl font-bold">💼 Our Clients</h3>
            <p className="mt-2 text-gray-600">
              - Google <br />
              - Amazon <br />
              - Microsoft
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ExploreCards;
