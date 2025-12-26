import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getDownloadCount, incrementDownloadCount as incrementFirebaseCount, initializeCounter } from '../firebase';

interface DownloadContextType {
  downloadCount: number;
  incrementDownloadCount: () => Promise<void>;
}

const DownloadContext = createContext<DownloadContextType | undefined>(undefined);

export const DownloadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [downloadCount, setDownloadCount] = useState<number>(0);

  useEffect(() => {
    const fetchDownloadCount = async () => {
      try {
        // Initialize counter if it doesn't exist
        await initializeCounter();
        const count = await getDownloadCount();
        setDownloadCount(count);
      } catch (error) {
        console.error('Failed to fetch download count:', error);
        setDownloadCount(0);
      }
    };
    
    fetchDownloadCount();
    
    // Refresh the count every 30 seconds
    const interval = setInterval(fetchDownloadCount, 30000);
    return () => clearInterval(interval);
  }, []);

  const incrementDownloadCount = async () => {
    try {
      const newCount = await incrementFirebaseCount();
      setDownloadCount(newCount);
    } catch (error) {
      console.error('Failed to increment download count:', error);
    }
  };

  return (
    <DownloadContext.Provider value={{ downloadCount, incrementDownloadCount }}>
      {children}
    </DownloadContext.Provider>
  );
};

export const useDownloadCount = () => {
  const context = useContext(DownloadContext);
  if (context === undefined) {
    throw new Error('useDownloadCount must be used within a DownloadProvider');
  }
  return context;
};
