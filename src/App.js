
import './App.css';
import Navigation from './pages/Navigation';
import Navigation_2 from './pages/Navigation_2';

import Section1 from './pages/section-1';
import Section2 from './pages/section-2';
import Section3 from './pages/section-3';
import Section4 from './pages/section-4';
import Section5 from './pages/section-5';
import FAQ from './pages/faq';
import BannerSection from './pages/banner-section';
import Footer from './pages/footer';



function App() {
  return (
    <div className="App">
   <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,600&display=swap" rel="stylesheet"></link>
    <Navigation_2/>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <FAQ />
    <BannerSection />
    <Footer />
    </div>
  );
}

export default App;
