import React, { useState, useEffect } from 'react';
import SnowContainer from './components/SnowContainer';
import Loader from './components/Loader';
import MusicControl from './components/MusicControl';
import GreetingForm from './components/GreetingForm';
import GreetingMessage from './components/GreetingMessage';
import styles from './App.module.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Simuler le chargement
    setTimeout(() => setLoading(false), 5000);
  }, []);

  const handleSubmit = (name) => {
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    setGreeting(formattedName);
  };

  if (loading) return <Loader />;

  return (
    <div className={styles.app}>
      <MusicControl />
      <SnowContainer />
      
      <h1 className={styles.title}>✨ Joyeux Noël ! ✨</h1>

      <GreetingForm onSubmit={handleSubmit} />
      
      {greeting && <GreetingMessage name={greeting} />}
      <Analytics />
    </div>
  );
}

export default App;
