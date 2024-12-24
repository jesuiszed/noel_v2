import React from 'react';

const GreetingMessage = ({ name }) => {
  return (
    <div className="w-full max-w-lg mx-auto p-8 text-center backdrop-blur-lg bg-white/10 
                    rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
      <h2 className="text-3xl font-bold text-white mb-4">🎄 Ho Ho Ho !</h2>
      <h2 className="text-3xl font-bold text-white mb-6">
        Joyeux Noël, <span className="text-green-300">{name}</span> !
      </h2>
      <p className="text-xl text-white/90 mb-4">
        ✨ Que la magie des fêtes illumine tes journées ✨
      </p>
      <p className="text-2xl text-white animate-bounce">
        🎁 Pleins de cadeaux et de bonheur ! 🎁
      </p>
    </div>
  );
};

export default GreetingMessage;
