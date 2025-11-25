'use client';
import { useState, useEffect } from 'react';

export function useParallaxBackground(imageUrl) {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS devices
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(iOS);
  }, []);

  // Return style object
  const backgroundStyle = {
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...(isIOS ? {} : { backgroundAttachment: 'fixed' })
  };

  return { backgroundStyle, isIOS };
}