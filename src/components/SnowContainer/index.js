import React, { useEffect } from 'react';

const SnowContainer = () => {
  useEffect(() => {
    const container = document.getElementById('snowContainer');
    const createSnowflake = () => {
      const flake = document.createElement('div');
      flake.innerHTML = Math.random() > 0.5 ? '❅' : '❆';
      flake.className = `absolute text-white opacity-70 animate-fall`;
      flake.style.left = `${Math.random() * 100}vw`;
      flake.style.animationDuration = `${Math.random() * 3 + 8}s`;
      flake.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`;
      container.appendChild(flake);
      
      setTimeout(() => flake.remove(), 10000);
    };

    const interval = setInterval(createSnowflake, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="snowContainer" className="fixed inset-0 pointer-events-none overflow-hidden" />
  );
};

export default SnowContainer;
