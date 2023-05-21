import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLocation } from "wouter";

export default function Model({ position, id, url, ...props }) {
  const objectRef = useRef();
  const gltf = useLoader(GLTFLoader, url);
  const modelInstance = new THREE.Object3D();

  const [location, setLocation] = useLocation();

  useEffect(() => {
    modelInstance.position.set(position[0], position[1], position[2]);
    modelInstance.add(gltf.scene);
    objectRef.current.add(modelInstance);

    return () => {
      objectRef.current.clear();
      modelInstance.remove(gltf.scene);
    };
  }, [gltf.scene, position]);

  function handleModels(id) {
    modelInstance.remove(gltf.scene);
    setLocation(id);
  }

  return (
    <group
      ref={objectRef}
      onClick={() => handleModels(id)}
      {...props}
      scale={0.03}
    />
  );
}
