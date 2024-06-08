
import './App.css';
import Navigation from './pages/Navigation';
import Navigation_2 from './pages/Navigation_2';
import React, { useState } from 'react';
import Section1 from './pages/section-1';
import Section2 from './pages/section-2';
import Section3 from './pages/section-3';
import Section4 from './pages/section-4';
import Section5 from './pages/section-5';
import FAQ from './pages/faq';
import BannerSection from './pages/banner-section';
import Footer from './pages/footer';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
    <div className="App">
   <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,600&display=swap" rel="stylesheet"></link>
    <Navigation_2  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <Section1 darkMode={darkMode}/>
    <Section2 darkMode={darkMode}/>
    <Section3 darkMode={darkMode} />
    <Section4 darkMode={darkMode}/>
    <Section5 darkMode={darkMode}/>
    <FAQ darkMode={darkMode}/>
    <BannerSection />
    <Footer darkMode={darkMode}/>
    </div>
    </div>
  );
}

export default App;
