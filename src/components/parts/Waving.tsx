import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/models/Waving.glb");

function WavingModel() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/models/Waving.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const first = Object.values(actions)[0];
    first?.reset().fadeIn(0.3).play();
  }, [actions, scene]);

  return (
    <group ref={group} position={[0, -0.2, 0]} scale={[10, 10, 10]}>
      <primitive object={scene} />
    </group>
  );
}

export default function WavingMascot() {
  return (
    <Canvas
      style={{ width: "100%", height: 400 }}
      camera={{ position: [0, 1.5, 5], fov: 45 }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={3} />
      <Environment preset="sunset" background={false} />
      <WavingModel />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
