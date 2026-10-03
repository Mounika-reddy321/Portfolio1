import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Compass } from 'lucide-react';

interface ThreeNeuralSphereProps {
  onNodeClick?: (nodeName: string) => void;
}

export const ThreeNeuralSphere: React.FC<ThreeNeuralSphereProps> = ({ onNodeClick }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string>('Python & ML');
  const [pulseCount, setPulseCount] = useState<number>(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for entire 3D neural object
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Geodesic Sphere of Nodes (Particles)
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const radius = 70;
    const colorPalette = [
      new THREE.Color('#00F2FE'), // Electric Cyan
      new THREE.Color('#7928CA'), // Violet
      new THREE.Color('#FF0080'), // Neon Pink
      new THREE.Color('#4FACFE'), // Electric Blue
      new THREE.Color('#00F5A0'), // Aurora Teal
    ];

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const col = colorPalette[i % colorPalette.length];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(0,242,254,0.8)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 7,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    mainGroup.add(particles);

    // 2. Connecting Lines inside Sphere
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4FACFE,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });

    const linePositions: number[] = [];
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];

        const x2 = positions[j * 3];
        const y2 = positions[j * 3 + 1];
        const z2 = positions[j * 3 + 2];

        const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
        if (dist < 32) {
          linePositions.push(x1, y1, z1, x2, y2, z2);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    mainGroup.add(lines);

    // 3. Orbiting Holographic Rings
    const ringGeometry = new THREE.TorusGeometry(88, 0.6, 16, 100);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x00F2FE,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: 0xFF0080,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    mainGroup.add(ring2);

    // 4. Glowing Pulsing Core
    const coreGeometry = new THREE.SphereGeometry(18, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x7928CA,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
      blending: THREE.AdditiveBlending,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(core);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.9;
      targetRotationX = -y * 0.9;
    };

    container.addEventListener('pointermove', onPointerMove);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Continuous slow rotation
      mainGroup.rotation.y += 0.005;
      mainGroup.rotation.x += 0.002;

      // Smooth mouse follow
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Orbiting rings counter-rotation
      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;

      // Core pulse
      const scale = 1 + Math.sin(time * 3) * 0.12;
      core.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', onPointerMove);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial1.dispose();
      ringMaterial2.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
    };
  }, []);

  const handleCanvasClick = () => {
    setPulseCount((prev) => prev + 1);
    const nodes = [
      'Python & ML Core',
      'Data Science & Analytics',
      'Appian Enterprise Records',
      'MySQL & Relational Data',
      'Interactive Web Systems',
    ];
    const nextNode = nodes[pulseCount % nodes.length];
    setHoveredNode(nextNode);
    if (onNodeClick) onNodeClick(nextNode);
  };

  return (
    <div
      onClick={handleCanvasClick}
      className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center cursor-pointer select-none group"
    >
      {/* 3D Three.js WebGL Canvas Mount */}
      <div ref={mountRef} className="w-full h-full relative z-10" />

      {/* Floating 3D HUD Badges */}
      <div className="absolute top-2 left-3 z-20 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/40 backdrop-blur-md shadow-lg shadow-cyan-500/10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
          3D NEURAL SPHERE
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-2xl bg-slate-950/85 border border-purple-500/30 backdrop-blur-xl shadow-xl flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
          <span className="text-slate-400 font-mono">ACTIVE NODE:</span>
          <span className="font-display font-bold text-white tracking-wide">
            {hoveredNode}
          </span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
          Click to Pulse
        </span>
      </div>
    </div>
  );
};
