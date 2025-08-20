'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import { useTheme } from 'next-themes'; // ✅ Import theme hook

const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const { theme } = useTheme(); // ✅ Access current theme

  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.destroy(); // Clean up previous instance
    }

    if (vantaRef.current) {
      const effect = NET({
        el: vantaRef.current,
        THREE: THREE,
        color: 0x0070f3,
        backgroundColor: theme === 'light' ? 0xffffff : 0x0a0a0a, // ✅ Theme-aware
        maxDistance: 20.0,
        spacing: 18.0,
        points: 12.0,
        showDots: true,
      });

      setVantaEffect(effect);
    }

    // Cleanup on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]); // ✅ Re-run when theme changes

  return <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default VantaBackground;
