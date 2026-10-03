import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeGlobalCosmos: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      3000
    );
    camera.position.z = 420;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

    // 1. Particle Cloud in 3D Space
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const palette = [
      new THREE.Color('#00F2FE'), // Electric Cyan
      new THREE.Color('#4FACFE'), // Cobalt Blue
      new THREE.Color('#7928CA'), // Violet
      new THREE.Color('#FF0080'), // Neon Pink
      new THREE.Color('#00F5A0'), // Aurora Teal
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1800;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3600;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1200;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      sizes[i] = Math.random() * 4 + 1.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Particle sprite
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext('2d');
    if (pCtx) {
      const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(0,242,254,0.7)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 32, 32);
    }
    const particleTex = new THREE.CanvasTexture(pCanvas);

    const material = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      map: particleTex,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 2. Floating 3D Geometric Polyhedra & Cubes (Prominent throughout overall portfolio)
    const polyGroup = new THREE.Group();
    scene.add(polyGroup);

    const wireMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x00F2FE, wireframe: true, transparent: true, opacity: 0.45 }),
      new THREE.MeshBasicMaterial({ color: 0x7928CA, wireframe: true, transparent: true, opacity: 0.4 }),
      new THREE.MeshBasicMaterial({ color: 0xFF0080, wireframe: true, transparent: true, opacity: 0.38 }),
      new THREE.MeshBasicMaterial({ color: 0x00F5A0, wireframe: true, transparent: true, opacity: 0.42 }),
      new THREE.MeshBasicMaterial({ color: 0x38BDF8, wireframe: true, transparent: true, opacity: 0.45 }),
    ];

    interface PolyObject {
      mesh: THREE.Mesh;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      baseY: number;
      floatSpeed: number;
      floatAmp: number;
    }

    const polyObjects: PolyObject[] = [];
    const polyCount = 26;

    for (let i = 0; i < polyCount; i++) {
      let geo: THREE.BufferGeometry;
      const type = i % 4;
      const sz = 16 + (i % 5) * 4;

      if (type === 0 || type === 1) {
        // 3D Cubes
        geo = new THREE.BoxGeometry(sz, sz, sz);
      } else if (type === 2) {
        // Octahedron
        geo = new THREE.OctahedronGeometry(sz * 0.75, 0);
      } else {
        // Icosahedron
        geo = new THREE.IcosahedronGeometry(sz * 0.8, 1);
      }

      const mat = wireMaterials[i % wireMaterials.length];
      const mesh = new THREE.Mesh(geo, mat);

      // Distribute evenly along the vertical height of the whole webpage (-2000 to +2000)
      const posY = (i / polyCount - 0.5) * 4000;
      const posX = (Math.random() - 0.5) * 1400;
      const posZ = (Math.random() - 0.5) * 800 - 100;

      mesh.position.set(posX, posY, posZ);
      polyGroup.add(mesh);

      polyObjects.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.012,
        rotSpeedY: (Math.random() - 0.5) * 0.014,
        rotSpeedZ: (Math.random() - 0.5) * 0.01,
        baseY: posY,
        floatSpeed: 0.5 + Math.random() * 0.8,
        floatAmp: 15 + Math.random() * 20,
      });
    }

    // Interactive Camera & Scroll Track
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let targetZ = 420;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = mouseX * 80;
      targetY = mouseY * 50;
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );
      const scrollRatio = scrollY / maxScroll;
      
      // Move camera smoothly through the cosmic depth as visitor scrolls
      targetZ = 420 - scrollRatio * 180;
      particles.position.y = scrollY * 0.35;
      polyGroup.position.y = scrollY * 0.32;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Cosmic particle rotation
      particles.rotation.y = time * 0.02;
      particles.rotation.x = Math.sin(time * 0.015) * 0.04;

      // Rotate and float every 3D cube / polyhedra
      polyObjects.forEach((item, idx) => {
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
        item.mesh.rotation.z += item.rotSpeedZ;
        item.mesh.position.y = item.baseY + Math.sin(time * item.floatSpeed + idx) * item.floatAmp;
      });

      // Smooth camera interpolation
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.position.z += (targetZ - camera.position.z) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      wireMaterials.forEach((m) => m.dispose());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-90"
    />
  );
};
