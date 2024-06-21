import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { UpcycledTerrarium } from "./UpcycledTerrarium"; // Asegúrate de importar correctamente tu modelo

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <UpcycledTerrarium />
      </Suspense>
      <OrbitControls />
    </>
  );
};

export default Experience;
