import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGLTF, useScroll } from "@react-three/drei";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const MODEL_URLS = [
  "/models/Look 1 com avatar.glb",
  "/models/Coelte.glb",
  "/models/Casaco.glb",
  "/models/Colt.glb",
  "/models/Look2.glb",
  "/models/Pants.glb",
  "/models/T-shirt black.glb",
  "/models/T-shirt green.glb",
  "/models/Underwear.glb",
];

export default function Scene() {
  const groupRef = useRef();
  const objectRef = useRef(new THREE.Object3D());
  const scrollRef = useRef(0);

  const [groupPosition, setGroupPosition] = useState(0);
  const [groupWidth, setGroupWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [models, setModels] = useState([]);

  useEffect(() => {
    const loadModels = async () => {
      const models = await Promise.all(
        MODEL_URLS.map(async (url) => {
          const gltf = await new GLTFLoader().loadAsync(url);
          return { gltf, url };
        })
      );
      setModels(models);
    };
    loadModels();
  }, []);

  useEffect(() => {
    models.forEach((model, index) => {
      const modelInstance = new THREE.Object3D();
      modelInstance.position.set(index * 100, -100, 0);
      modelInstance.add(model.gltf.scene);
      objectRef.current.add(modelInstance);
    });

    if (groupRef.current) {
      groupRef.current.add(objectRef.current);
      gsap.to(objectRef.current.position, {
        x: -(models.length - 1) * 10,
        scrollTrigger: {
          trigger: groupRef.current.parentElement,
          start: "top left",
          end: "bottom right",
          scrub: true,
        },
      });
    }
  }, [models]);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
      />
      <group ref={groupRef} scale={0.01}>
        <primitive object={objectRef.current} />
      </group>
    </>
  );
}
