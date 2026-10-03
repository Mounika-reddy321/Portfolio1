import confetti from 'canvas-confetti';

// Trigger futuristic neon cyber particle burst from click coordinates
export const triggerCyberBurst = (clientX?: number, clientY?: number) => {
  const x = clientX !== undefined ? clientX / window.innerWidth : 0.5;
  const y = clientY !== undefined ? clientY / window.innerHeight : 0.5;

  confetti({
    particleCount: 28,
    spread: 60,
    startVelocity: 24,
    origin: { x, y },
    colors: ['#00F2FE', '#7928CA', '#FF0080', '#00F5A0', '#4FACFE'],
    shapes: ['circle', 'square'],
    scalar: 0.75,
    ticks: 120,
    disableForReducedMotion: true,
    zIndex: 9999
  });
};

export const triggerGrandWowBurst = () => {
  const count = 60;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#00F2FE', '#4FACFE', '#7928CA', '#FF0080', '#00F5A0'],
    disableForReducedMotion: true,
    zIndex: 9999
  };

  confetti({
    ...defaults,
    particleCount: count,
    spread: 80,
    startVelocity: 35,
    scalar: 0.9
  });
};
