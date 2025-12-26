import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { useDownloadCount } from '../contexts/DownloadContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [gifKey, setGifKey] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const { downloadCount, incrementDownloadCount } = useDownloadCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  useEffect(() => {
    // Listen for messages from the Google Form iframe
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from Google Forms indicating submission
      if (event.data && typeof event.data === 'string' && event.data.includes('formResponse')) {
        handleDownloadAfterSubmission();
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleDownloadExtension = async () => {
    setShowDownloadPopup(true);
    
    // Increment the counter
    await incrementDownloadCount();
    
    // Start download immediately
    const link = document.createElement('a');
    link.href = '/assets/arkenExtension.zip';
    link.download = 'arkenExtension.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAfterSubmission = async () => {
    setShowFormModal(false);
    setShowDownloadPopup(true);
    
    // Increment the worldwide counter
    await incrementDownloadCount();
    
    const link = document.createElement('a');
    link.href = '/assets/arkenExtension.zip';
    link.download = 'arkenExtension.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/70 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-white/10 md:border-transparent py-4 md:py-6' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 group cursor-pointer"
          onMouseEnter={() => {
            setIsHovered(true);
            setGifKey(prev => prev + 1);
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-16 h-16">
            {isHovered && (
              <img 
                key={gifKey}
                src={`/assets/GIF.gif?${gifKey}`}
                alt="ARKEN Logo" 
                className="w-16 h-16 object-contain"
              />
            )}
            {!isHovered && (
              <img 
                src="/assets/LOGO.png"
                alt="ARKEN Logo" 
                className="w-16 h-16 object-contain"
              />
            )}
            <div className="absolute inset-0 bg-purple-500/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="font-display font-bold text-2xl tracking-wider text-white">
            ARKEN
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Vision', 'Solutions'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-purple-300 hover:text-white transition-all tracking-wide px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 hover:bg-purple-500/20 hover:border-purple-400/50"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={handleDownloadExtension}
            className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Download Extension</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in duration-200">
           {['Vision', 'Solutions'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={handleDownloadExtension}
            className="mt-4 w-full px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Download Extension</span>
          </button>
        </div>
      )}
      
      {/* Google Form Modal */}
      {showFormModal && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={() => setShowFormModal(false)}
          />
          
          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-3xl mx-4 max-h-[90vh]">
            <div className="bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-200 relative overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setShowFormModal(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              {/* Form Title */}
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-semibold text-white">Download Extension</h3>
                <p className="text-sm text-gray-400 mt-2">Please fill out this form before downloading the extension</p>
              </div>
              
              {/* Embedded Google Form */}
              <div className="w-full h-[60vh] overflow-auto">
                <iframe 
                  src="https://docs.google.com/forms/d/1QotUzpVOPhAGFCvsXgvzEuWBNOkiPgbU_N9_0TCDApA/viewform?embedded=true"
                  width="100%" 
                  height="100%"
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="w-full"
                >
                  Loading…
                </iframe>
              </div>
              
              {/* Manual Download Button (Fallback) */}
              <div className="p-6 border-t border-white/10">
                <p className="text-xs text-gray-500 mb-3 text-center">
                  After submitting the form above, click below to download:
                </p>
                <button
                  onClick={handleDownloadAfterSubmission}
                  className="w-full px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 relative group"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-purple-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Download Now</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      
      {/* Centered Download Popup Modal */}
      {showDownloadPopup && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={() => setShowDownloadPopup(false)}
          />
          
          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-2xl mx-4 max-h-[90vh] overflow-auto">
            <div className="bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 fade-in duration-200 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowDownloadPopup(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              {/* Content */}
              <div className="mt-2">
                <h3 className="text-xl font-semibold text-white mb-4">Download Started</h3>
                
                {/* Download Counter */}
                <div className="mb-6 p-4 rounded-lg relative overflow-hidden">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 via-black to-green-500 opacity-75 animate-gradient bg-[length:200%_200%]" />
                  <div className="absolute inset-[2px] rounded-lg bg-black/90" />
                  <div className="relative flex items-center justify-center gap-2">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-purple-400">{downloadCount.toLocaleString()}</p>
                      <div className="flex items-center justify-center gap-1.5 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <p className="text-xs text-gray-400">Downloads Worldwide • Still Counting</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-300 mb-4">
                  Your download will start automatically in a moment.
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  If the download doesn't start:
                </p>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/assets/arkenExtension.zip';
                    link.download = 'arkenExtension.zip';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="w-full px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 mb-6"
                >
                  Click Here
                </button>
                
                {/* Optional Form Section */}
                <div className="border-t border-white/10 pt-6 mt-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Optional: Help us improve</h4>
                  <p className="text-xs text-gray-400 mb-4">
                    Share your feedback with us (optional)
                  </p>
                  <div className="w-full h-[400px] rounded-lg overflow-hidden border border-white/10">
                    <iframe 
                      src="https://docs.google.com/forms/d/1QotUzpVOPhAGFCvsXgvzEuWBNOkiPgbU_N9_0TCDApA/viewform?embedded=true"
                      width="100%" 
                      height="100%"
                      frameBorder="0" 
                      marginHeight={0} 
                      marginWidth={0}
                      className="w-full"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};