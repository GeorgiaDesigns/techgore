import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload } from "@react-three/drei";
import { ScrollControls, Scroll, ContactShadows } from "@react-three/drei";
import Scene from "./Scene";

export const Experience = () => {
  return (
    <Canvas
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      style={{ height: "100vh" }}
    >
      <Suspense fallback={null}>
        <ScrollControls horizontal pages={3}>
          <Scroll>
            <ambientLight intensity={0.5} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              shadow-mapSize={[512, 512]}
              castShadow
            />

            <Scene />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, 0, 0]}
              opacity={0.75}
              width={200}
              height={10}
              blur={5}
              far={10}
            />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: "absolute", top: "20vh", left: "-75vw" }}>
              home
            </h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "25vw" }}>
              to
            </h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "125vw" }}>
              be
            </h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "225vw" }}>
              home
            </h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "325vw" }}>
              to
            </h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "425vw" }}>
              be
            </h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  );
};
