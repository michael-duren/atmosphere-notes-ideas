import { useRef } from 'react';
import { Clock, Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

export default function Cube() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }: { clock: Clock }) => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x = clock.getElapsedTime();
    meshRef.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
  );
}
