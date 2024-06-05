"use client";
import React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import { MeshDepthMaterial, MeshPhongMaterial } from "three";
import * as THREE from "three"; // Import Three.js

function AnimatedSphere() {
  const [hovered, setHovered] = useState(false);
  const { mouse } = useThree();
  const meshRef = useRef();
  const displacementMap = useTexture(
    "https://threejs.org/examples/textures/terrain/grasslight-big.jpg"
  ); // Example texture

  //const texture = useTexture("/path-to-texture.jpg"); // Optional: Add texture for visual effect
  const texture = new THREE.TextureLoader().load(
    "https://threejs.org/examples/textures/checker.png"
  );
  // Rotate and distort sphere
  // useFrame((state, delta) => {
  //   state.scene.traverse((object) => {
  //     if (object.isMesh) {
  //       const scale = hovered ? 1.2 : 1; // Distortion scale
  //       object.scale.set(scale, scale, scale);
  //       if (hovered) {
  //         object.rotation.y += delta * 0.5; // Rotation speed
  //       }
  //     }
  //   });
  // });

  useFrame(() => {
    if (meshRef.current) {
      const mesh = meshRef.current;
      mesh.material.displacementScale = hovered ? 0.1 * mouse.x : 0; // Displacement effect intensity based on cursor x position
    }
  });

  return (
    // <Sphere
    //   visible
    //   args={[1, 32, 32]}
    //   scale={2}
    //   onPointerOver={() => setHovered(true)}
    //   onPointerOut={() => setHovered(false)}
    // >
    //   <meshPhongMaterial
    //     attach="material"
    //     color={hovered ? "red" : "royalblue"}
    //     map={texture}
    //   />
    // </Sphere>
    <Sphere
      ref={meshRef}
      visible
      args={[1, 32, 32]}
      scale={2}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshPhongMaterial
        attach="material"
        color={hovered ? "red" : "royalblue"}
        displacementMap={displacementMap}
        displacementScale={0} // Start with no displacement
      />
    </Sphere>
  );
}

export default function SphereComponent() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
