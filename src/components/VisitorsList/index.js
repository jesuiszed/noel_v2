import React from 'react';

const VisitorsList = ({ visitors }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 p-6 backdrop-blur-md bg-white/10 rounded-xl shadow-2xl">
      <h3 className="text-2xl font-bold text-white text-center mb-4">🎅 Nos visiteurs 🎅</h3>
      <div className="space-y-2">
        {visitors.map((visitor, index) => (
          <div
            key={index}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white text-lg 
                       hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
          >
            ✨ {visitor}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorsList;
