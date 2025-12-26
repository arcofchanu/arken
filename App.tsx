import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { WelcomePage } from './components/WelcomePage';
import { DownloadProvider } from './contexts/DownloadContext';

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [mainContentVisible, setMainContentVisible] = useState(false);

  const handleEnter = () => {
    setShowWelcome(false);
    setTimeout(() => setMainContentVisible(true), 100);
  };

  if (showWelcome) {
    return <WelcomePage onEnter={handleEnter} />;
  }

  return (
    <DownloadProvider>
    <div className={`relative min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white overflow-x-hidden transition-opacity duration-500 ${mainContentVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Main purple gradient blob */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow" />
        
        {/* Secondary darker blob */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-950/20 rounded-full blur-[100px]" />
        
        {/* Accent blob */}
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-fuchsia-900/10 rounded-full blur-[80px] animate-float" />
        
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </div>
    </DownloadProvider>
  );
};

export default App;