import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import PixelBlast from './PixelBlast';
import { useDownloadCount } from '../contexts/DownloadContext';

export const Hero: React.FC = () => {
  const { downloadCount } = useDownloadCount();

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
          Minimalist, powerful, and intentionally designed for the New TRENCHERS.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <button className="group relative px-8 py-4 rounded-lg bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-900/20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="px-8 py-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium text-lg transition-all hover:scale-105 active:scale-95 backdrop-blur-md">
            Installation Guide
          </button>
        </div>

        {/* YouTube Video */}
        <div className="mt-24 w-full max-w-5xl aspect-[16/9] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 animate-in fade-in zoom-in duration-1000 delay-500">
          <iframe 
            src="https://www.youtube.com/embed/SfUowVo5R8s"
            title="ARKEN Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
