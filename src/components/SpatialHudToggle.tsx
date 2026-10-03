import React, { useState } from 'react';
import { Box, Eye, Layers, Sparkles, RefreshCw } from 'lucide-react';
import { playWowSound, playNavClickSound } from '../utils/soundEffects';
import { triggerCyberBurst } from '../utils/burstEffect';

interface SpatialHudToggleProps {
  is3DSpatialActive: boolean;
  onToggle3DSpatial: () => void;
}

export const SpatialHudToggle: React.FC<SpatialHudToggleProps> = ({
  is3DSpatialActive,
  onToggle3DSpatial
}) => {
  const [minimized, setMinimized] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    playWowSound();
    triggerCyberBurst(e.clientX, e.clientY);
    onToggle3DSpatial();
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative group">
        {/* Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 opacity-40 blur-md group-hover:opacity-75 transition-opacity pointer-events-none" />

        <div className="relative rounded-2xl bg-[#090D24]/95 border border-cyan-400/40 p-2.5 shadow-2xl backdrop-blur-xl flex items-center gap-2 text-xs">
          
          <button
            onClick={handleToggle}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono font-bold transition-all cursor-pointer ${
              is3DSpatialActive
                ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 shadow-md shadow-cyan-400/40 scale-105 ring-2 ring-cyan-300'
                : 'bg-slate-900/90 text-cyan-300 hover:bg-slate-800 hover:text-white border border-slate-700/80'
            }`}
          >
            <Box className={`w-4 h-4 ${is3DSpatialActive ? 'animate-spin' : ''}`} />
            <span>{is3DSpatialActive ? '3D SPATIAL: ON' : 'ENABLE 3D SPATIAL'}</span>
          </button>

          <span className="hidden sm:inline-block text-[10px] font-mono text-slate-400 px-1.5">
            {is3DSpatialActive ? 'Tilt Active' : 'Perspective Mode'}
          </span>
        </div>
      </div>
    </div>
  );
};
