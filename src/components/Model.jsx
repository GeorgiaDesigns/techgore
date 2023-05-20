import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLocation } from "wouter";

export default function Model({ position, id, url, ...props }) {
  const objectRef = useRef();
  const gltf = useLoader(GLTFLoader, url);

  const [location, setLocation] = useLocation();

  const handleRoute = () => {
    setLocation(id);
  };

  useEffect(() => {
    const modelInstance = new THREE.Object3D();
    modelInstance.position.set(position[0], position[1], position[2]);
    modelInstance.add(gltf.scene);
    objectRef.current.add(modelInstance);
  }, [gltf.scene, position]);

  return (
    <group ref={objectRef} onClick={handleRoute} {...props} scale={0.03} />
  );
}
