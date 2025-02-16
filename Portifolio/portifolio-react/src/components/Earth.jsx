import * as THREE from "three";
import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import EarthMaterial from "../components/EarthMaterial";  // Importando o material da Terra
import AtmosphereMesh from "../components/AtmosphereMesh";  // Importando a atmosfera

const sunDirection = new THREE.Vector3(-2, 0.5, 1.5).normalize();

function Earth() {
  const ref = useRef();
  
  useFrame(() => {
    ref.current.rotation.y += 0.003; // Rotacionando a Terra
  });
  
  const axialTilt = 23.4 * Math.PI / 180; // Inclinação axial da Terra

  return (
    <group rotation-z={axialTilt} position={[2, 0, 0]}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2, 64]} /> {/* Criando a geometria da Terra */}
        <EarthMaterial sunDirection={sunDirection} /> {/* Aplica o material da Terra */}
        <AtmosphereMesh /> {/* Aplica a atmosfera */}
      </mesh>
    </group>
  );
}

export default Earth;