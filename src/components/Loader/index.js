import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col items-center justify-center">
      <div className="text-6xl font-bold text-white mb-8 animate-pulse">
        {count}
      </div>
      <div className="text-2xl text-white text-center">
        🎄 Préparation de la magie de Noël... 🎄
      </div>
    </div>
  );
};

export default Loader;
