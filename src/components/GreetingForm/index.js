import React, { useState } from 'react';

const GreetingForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col space-y-4">
        <label 
          htmlFor="firstName" 
          className="text-xl text-white font-medium text-center"
        >
          Entrez votre prénom :
        </label>
        <input
          type="text"
          id="firstName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={2}
          maxLength={30}
          className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30
                     text-white placeholder-white/50 focus:outline-none focus:ring-2 
                     focus:ring-white/50 focus:border-transparent"
          placeholder="Votre prénom..."
        />
        <button 
          type="submit"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg
                     transform transition-all duration-300 hover:scale-105 active:scale-95
                     font-bold text-lg shadow-lg"
        >
          🎄 Envoyer
        </button>
      </div>
    </form>
  );
};

export default GreetingForm;
