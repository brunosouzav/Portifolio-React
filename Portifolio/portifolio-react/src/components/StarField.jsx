import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber"; // Importando o hook useFrame

const StarField = () => {
  const ref = useRef();
  const [positions, setPositions] = useState([]);
  const [velocities, setVelocities] = useState([]);

  useEffect(() => {
    const count = 500; // Menos estrelas
    const posArray = new Float32Array(count * 3);
    const velArray = new Float32Array(count * 3); // Armazenando velocidades individuais

    for (let i = 0; i < count * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50; // Distribui as estrelas em um espaço mais controlado 
      velArray[i] = (Math.random() - 0.5) * 0.05; // Velocidade aleatória para cada estrela
    }

    setPositions(posArray);
    setVelocities(velArray);
  }, []);

  // Atualizando a posição das estrelas
  useFrame(() => {
    if (ref.current) {
      const positionArray = ref.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i++) {
        positionArray[i] += velocities[i]; // Movendo as estrelas
        // Se a estrela sair do limite, ela retorna para o outro lado
        if (positionArray[i] > 25 || positionArray[i] < -25) {
          velocities[i] = -velocities[i]; // Inverte a direção
        }
      }
      ref.current.geometry.attributes.position.needsUpdate = true; // Atualiza a posição das estrelas
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial color="#a3c9ff" size={0.04} transparent opacity={0.8} />
    </Points>
  );
};

export default StarField;