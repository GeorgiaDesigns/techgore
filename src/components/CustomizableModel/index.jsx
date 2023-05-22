import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useLocation } from "wouter";

import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
} from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Buffer } from "buffer";

const CustomizableModel = forwardRef(
  ({ model, meshColors, setMeshColors, updateCurrentMesh, ...props }, ref) => {
    const objectRef = useRef();
    // const gltf = useLoader(GLTFLoader, url);
    const [hovered, set] = useState(null);
    const modelInstance = model;
    // const [location, setLocation] = useLocation();

    // const navigate = () => {
    //   setLocation("/");
    // };

    // useImperativeHandle(ref, () => ({
    //   navigate,
    // }));

    useEffect(() => {
      // modelInstance.add(gltf.scene);
      console.log(modelInstance);
      modelInstance.position.set([120, -100, 0]);
      const meshColors = {};
      modelInstance.traverse((child) => {
        if (
          child.isMesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          meshColors[child.material.name] =
            "#" +
            (
              ((child.material.color.r * 255) << 16) |
              ((child.material.color.g * 255) << 8) |
              (child.material.color.b * 255)
            )
              .toString(16)
              .padStart(6, "0");
        }
      });
      setMeshColors(meshColors);

      objectRef.current.add(modelInstance);
      // return () => {
      //   modelInstance.remove(gltf.scene);
      // };
    }, []);

    useEffect(() => {
      modelInstance.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          const meshName = node.material.name;
          const color = meshColors[meshName];

          if (color !== undefined) {
            const material = new THREE.MeshBasicMaterial({ color });
            node.material.color = material.color;
          }
        }
      });
    }, [meshColors]);

    useEffect(() => {
      const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${meshColors[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
      const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
      if (hovered) {
        document.body.style.cursor = `url('data:image/svg+xml;base64,${Buffer.from(
          cursor
        ).toString("base64")}'), auto`;
        return () =>
          (document.body.style.cursor = `url('data:image/svg+xml;base64,${Buffer.from(
            auto
          ).toString("base64")}'), auto`);
      }
    }, [hovered]);

    return (
      <>
        <group
          ref={objectRef}
          onPointerOver={(e) => (
            e.stopPropagation(), set(e.object.material.name)
          )}
          onPointerOut={(e) => e.intersections.length === 0 && set(null)}
          onPointerMissed={() => updateCurrentMesh(null)}
          onClick={(e) => (
            e.stopPropagation(), updateCurrentMesh(e.object.material.name)
          )}
          {...props}
          scale={0.03}
        />
      </>
    );
  }
);

export default CustomizableModel;
