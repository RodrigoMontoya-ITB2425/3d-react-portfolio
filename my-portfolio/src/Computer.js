import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Carga el modelo GLTF
function ComputerModel() {
  const { scene } = useGLTF('public/models/computer.gltf'); // Ruta relativa al archivo
  return <primitive object={scene} scale={0.8} />;
}

export default function Computer() {
  return (
    <Canvas style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <ComputerModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
