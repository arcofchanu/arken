import React, { useState, useRef } from 'react';
import { ChevronRight, ArrowRight, X } from 'lucide-react';
import PixelBlast from './PixelBlast';
import { useDownloadCount } from '../contexts/DownloadContext';

export const Hero: React.FC = () => {
  const { downloadCount, incrementDownloadCount } = useDownloadCount();
  const [showGuide, setShowGuide] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleDownload = async () => {
    // Increment the counter
    await incrementDownloadCount();
    
    // Start download
    const link = document.createElement('a');
    link.href = '/assets/arkenExtension.zip';
    link.download = 'arkenExtension.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close the dialog
    setShowGuide(false);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <PixelBlast 
          variant="circle"
          color="#6504bf" 
          pixelSize={6} 
          patternScale={4} 
          speed={0.8} 
          enableRipples={true}
          transparent={true}
        />
        {/* Gradient Fade to connect with next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-24 pb-20 md:pt-16 md:pb-32">
        
        {/* Live Counter - Above the Badge */}
        <div className="mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-900/20 backdrop-blur-sm">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 via-black to-green-500 opacity-75 animate-gradient bg-[length:200%_200%]" />
            <div className="absolute inset-[2px] rounded-xl bg-black/90 backdrop-blur-sm" />
            <div className="relative text-center">
              <p className="text-2xl md:text-3xl font-bold text-purple-300">{downloadCount.toLocaleString()}</p>
              <div className="flex items-center justify-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs text-gray-400">Downloads Worldwide • Still Counting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-200 text-xs md:text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          Now LIVE for TRENCHERS
          <ChevronRight className="w-3 h-3 text-purple-400" />
        </div>

        {/* Main Title */}
        <img 
          src="/assets/ARKEN.png" 
          alt="ARKEN" 
          className="w-auto h-32 md:h-48 lg:h-64 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 drop-shadow-2xl"
        />

        {/* Subtitle */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 drop-shadow-md">
          The definitive architecture for the next generation of digital presence. 
          Minimalist, powerful, and intentionally designed for the new TRENCHERS.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <button 
            onClick={scrollToVideo}
            className="group relative px-8 py-4 rounded-lg bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button 
            onClick={() => setShowGuide(true)}
            className="px-8 py-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium text-lg transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
          >
            Installation Guide
          </button>
        </div>

        {/* YouTube Video */}
        <div 
          ref={videoRef}
          className="mt-24 w-full max-w-5xl aspect-[16/9] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 animate-in fade-in zoom-in duration-1000 delay-500"
        >
          <iframe 
            src="https://www.youtube.com/embed/SfUowVo5R8s"
            title="ARKEN Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      {/* Installation Guide Dialog */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-gradient-to-br from-purple-950/70 to-black/70 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-900/50 backdrop-blur-md animate-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setShowGuide(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-2">Installation Guide</h2>
              <p className="text-gray-400 mb-8">Follow these steps to install ARKEN</p>

              <div className="space-y-4">
                {[
                  "Download the extension from the site",
                  "Unzip the 'arkenExtension.zip' in your desired path",
                  { text: "Go to ", code: "chrome://extensions/", text2: " & enable 'Dev Mode'" },
                  "Click on 'Load Unpacked' at top-left corner",
                  "Select the folder 'arkenExtension'",
                  "Ready to use on AXIOM PRO"
                ].map((step, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold group-hover:bg-purple-500/30 transition-colors">
                      {index + 1}
                    </div>
                    <p className="text-gray-200 pt-1 leading-relaxed">
                      {typeof step === 'string' ? (
                        step
                      ) : (
                        <>
                          {step.text}
                          <code className="px-2 py-0.5 rounded bg-purple-900/40 text-purple-300 font-mono text-sm border border-purple-500/30">
                            {step.code}
                          </code>
                          {step.text2}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
                <button
                  onClick={() => setShowGuide(false)}
                  className="flex-1 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 relative group"
                >
                  <div className="absolute inset-0 rounded-full bg-purple-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Got it!</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 relative group"
                >
                  <div className="absolute inset-0 rounded-full bg-purple-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
