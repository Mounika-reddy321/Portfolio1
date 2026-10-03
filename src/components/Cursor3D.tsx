import React, { useEffect, useState } from 'react';

export const Cursor3D: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth trailing ring loop
    let animId: number;
    const updateTrail = () => {
      setTrailPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(updateTrail);
    };
    animId = requestAnimationFrame(updateTrail);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [pos.x, pos.y, visible]);

  if (!visible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 3D Primary Point */}
      <div
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`,
          transition: 'transform 0.04s linear',
        }}
        className={`w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#00F2FE] pointer-events-none ${
          isClicking ? 'scale-150 bg-fuchsia-400 shadow-[0_0_16px_#FF0080]' : ''
        }`}
      />

      {/* 3D Trailing Aura Ring */}
      <div
        style={{
          transform: `translate3d(${trailPos.x - 18}px, ${trailPos.y - 18}px, 0)`,
        }}
        className={`w-9 h-9 rounded-full border border-cyan-400/50 pointer-events-none transition-all duration-200 ${
          isHovered
            ? 'scale-175 border-fuchsia-400 bg-fuchsia-500/10 shadow-[0_0_20px_rgba(255,0,128,0.3)]'
            : 'scale-100 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
        } ${isClicking ? 'scale-75' : ''}`}
      />
    </div>
  );
};
