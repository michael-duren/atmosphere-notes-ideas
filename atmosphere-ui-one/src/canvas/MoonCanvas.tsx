import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Clock, Mesh } from 'three';
import { Cloud, Stars } from '@react-three/drei';

const Sun = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }: { clock: Clock }) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32]} />
      <meshStandardMaterial color={'#a0a0a0'} />
    </mesh>
  );
};

export default function MoonCanvas() {
  return (
    <div className="-z-10 absolute w-full h-full flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight />
        <pointLight color={'#000000'} position={[10, 10, 10]} intensity={1} />
        <Cloud args={[3, 2]} />
        <Cloud color={'#05bfdb'} position={[-4, -2, 0]} args={[3, 2]} />
        <Cloud color={'#635985'} position={[-4, 2, 0]} args={[3, 2]} />
        <Sun />
        <Stars />
      </Canvas>
    </div>
  );
}
