import React, { useState, useRef } from 'react';
import jingleBells from './jingle-bells.mp3';
const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Erreur lecture audio:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <button 
        className="fixed top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md
                   hover:bg-white/30 transition-all duration-300 flex items-center justify-center
                   text-2xl shadow-lg hover:scale-110 active:scale-95"
        onClick={toggleMusic}
      >
        {isPlaying ? '⏸' : '🎵'}
      </button>
      <audio ref={audioRef} loop>
        <source src={jingleBells} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default MusicControl;
