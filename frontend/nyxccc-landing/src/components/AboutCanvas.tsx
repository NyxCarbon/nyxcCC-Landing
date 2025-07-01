'use client';

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Environment } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import type { Group } from "three";

const planet = "/nyxccc-img/world.glb";
const hdr = "/nyxccc-img/smallsky2.hdr";

interface ModelProps {
  pointer: { x: number; y: number };
}

const Model: React.FC<ModelProps> = ({ pointer }) => {
  try {
    const gltf = useLoader(GLTFLoader, planet) as unknown as GLTF;
    const { scene } = gltf;

    useFrame(() => {
      if (scene) {
        scene.rotation.x += -pointer.y * 2 * 0.005;
        scene.rotation.y += pointer.x * 2 * 0.005;
        scene.scale.setScalar(0.7);
      }
    });

    return (
      <>
        <Environment files={hdr} background={false} />
        <primitive object={scene} />
      </>
    );
  } catch (error) {
    console.error("Error loading 3D model:", error);
    return null;
  }
};

const AboutCanvas: React.FC = () => {
  const pointer = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  // If you want to be strict, you can use hardcoded values or refs to get the canvas size
  pointer.current.x = (x / rect.width) * 2 - 1;
  pointer.current.y = -(y / rect.height) * 2 + 1;
};
  
  return (
    <div
      style={{
        width: "95vw",
        height: "40vh",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <Canvas onPointerMove={handlePointerMove}>
        <ambientLight intensity={2} />
        <Model pointer={pointer.current} />
      </Canvas>
    </div>
  );
};

export default AboutCanvas;
