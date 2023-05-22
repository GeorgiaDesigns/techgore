import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload } from "@react-three/drei";
import { ScrollControls, Scroll, ContactShadows } from "@react-three/drei";
import Scene from "./Scene";
import { useState } from "react";
import ProductDetail from "./ProductDetail";

export const Experience = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  return selectedModel ? (
    <ProductDetail model={selectedModel} setSelectedModel={setSelectedModel} />
  ) : (
    <Canvas
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      style={{ height: "100vh" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={[512, 512]}
          castShadow
        />

        <Scene setSelectedModel={setSelectedModel} />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, 0, 0]}
          opacity={0.75}
          width={200}
          height={10}
          blur={5}
          far={10}
        />
        <Preload />
      </Suspense>
    </Canvas>
  );
};
