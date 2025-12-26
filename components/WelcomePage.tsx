import React, { useEffect, useState } from 'react';
import PixelBlast from './PixelBlast';

interface WelcomePageProps {
  onEnter: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start fade-out animation before transitioning
    const fadeOutTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4750); // Start fade-out 250ms before transition (5 seconds - 250ms)

    // Transition to next page after fade-out completes
    const transitionTimer = setTimeout(() => {
      onEnter();
    }, 5250); // 5 seconds GIF + 250ms fade-out

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(transitionTimer);
    };
  }, [onEnter]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background Effects */}
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
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Welcome GIF */}
      <div className="relative z-10 flex items-center justify-center">
        <img 
          src="/assets/WGIF.gif" 
          alt="Welcome" 
          className="max-w-full max-h-screen object-contain animate-in fade-in zoom-in duration-700"
        />
      </div>
    </div>
  );
};
