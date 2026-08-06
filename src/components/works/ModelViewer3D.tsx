'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Center } from '@react-three/drei';
import { Box3, Vector3 } from 'three';
import type { Group } from 'three';

// ── Model loader ────────────────────────────────────────────────────────────
function GLBModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const ref = useRef<Group>(null);

  // Normalize scale so any model fits the viewer
  const box = new Box3().setFromObject(scene);
  const size = new Vector3();
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = maxDim > 0 ? 2 / maxDim : 1;

  // Gentle auto-rotate when user isn't dragging
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={ref} scale={scale}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

// ── Loading placeholder ─────────────────────────────────────────────────────
function LoadingRing() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
      <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-[#FF4D4D] animate-spin" />
      <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
        Loading 3D model…
      </span>
    </div>
  );
}

// ── Public component ────────────────────────────────────────────────────────
interface ModelViewerProps {
  modelUrl: string;
  label?: string;
}

export default function ModelViewer3D({ modelUrl, label = '3D Interactive Model' }: ModelViewerProps) {
  return (
    <div className="relative w-full aspect-[4/3] bg-[#0A0A0C] border border-white/10 shadow-2xl overflow-hidden group">
      {/* Canvas */}
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-4, -4, -4]} intensity={0.4} color="#FF4D4D" />
        <Suspense fallback={null}>
          <GLBModel url={modelUrl} />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={1.5}
          maxDistance={8}
          autoRotate={false}
        />
      </Canvas>

      {/* Loading fallback (shown before Suspense resolves via CSS trick) */}
      <noscript>
        <LoadingRing />
      </noscript>

      {/* Top-left badge */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10 text-white text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 pointer-events-none select-none">
        <span className="w-2 h-2 rounded-full bg-[#FF4D4D] animate-pulse" />
        {label}
      </div>

      {/* Bottom hint — fades on hover */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase tracking-widest text-white/30 pointer-events-none select-none transition-opacity duration-500 group-hover:opacity-0">
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  );
}

// Preload hint so the model starts fetching immediately
useGLTF.preload('/media/by-mosa/camera.glb');
