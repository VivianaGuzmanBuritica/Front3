import React, { useState } from 'react';
import './App.css';
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  const [language, setLanguage] = useState(languages.english);
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const handleChangeLA = (newLanguage) => {
    setLanguage(languages[newLanguage]);
    setCurrentLanguage(newLanguage);
  };

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, handleChangeLA, currentLanguage }}>
        <Navbar />
        <Body />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;