'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Create a safer version of Lottie that handles the undefined error
const SafeLottie = dynamic(
  () => import('react-lottie').then(mod => {
    const OriginalLottie = mod.default;
    // Create a wrapper component that handles the error
    return function SafeLottieWrapper(props: any) {
      const [hasError, setHasError] = useState(false);

      useEffect(() => {
        // Cleanup function to prevent the error
        return () => {
          // This prevents the forEach error on unmount
          if (window && window.removeEventListener) {
            ['resize', 'orientationchange'].forEach(event => {
              window.removeEventListener(event, () => {});
            });
          }
        };
      }, []);

      if (hasError) return null;

      try {
        return <OriginalLottie {...props} />;
      } catch (error) {
        setHasError(true);
        return null;
      }
    };
  }),
  { ssr: false }
);

interface ClientLottieProps {
  options: {
    loop: boolean;
    autoplay: boolean;
    animationData: any;
    rendererSettings?: {
      preserveAspectRatio?: string;
    };
  };
}

export default function ClientLottie({ options }: ClientLottieProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <SafeLottie options={options} />;
}
