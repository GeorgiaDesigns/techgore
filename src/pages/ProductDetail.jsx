import CustomizableModel from "../components/CustomizableModel";
import { useRoute } from "wouter";
import { useEffect, useState } from "react";
import MODEL_URLS from "../MODEL_URLS.json";
import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { HexColorPicker } from "react-colorful";

export default function ProductDetail() {
  const [match, params] = useRoute("/:productId");
  const { productId } = params;
  const [productUrl, setProductUrl] = useState(null);
  const [meshColors, setMeshColors] = useState({});
  const [editingMesh, setEditingMesh] = useState({});

  useEffect(() => {
    const currentModel = MODEL_URLS.find((item) => item.id === productId);
    setProductUrl(currentModel.url);
  }, [productId]);

  const updateMeshColors = (newMeshColors) => {
    setMeshColors((prevColors) => ({
      ...prevColors,
      [editingMesh]: newMeshColors,
    }));
  };

  return (
    <>
      <BackButton model={gltf.scene} />

      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={[512, 512]}
          castShadow
        />
        <PresentationControls
          global
          config={{ mass: 2, tension: 300 }}
          snap={{ mass: 4, tension: 1000 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <CustomizableModel
            position={[0, -120, 0]}
            id={productId}
            url={productUrl}
            meshColors={meshColors}
            setMeshColors={setMeshColors}
            updateCurrentMesh={setEditingMesh}
          />
        </PresentationControls>
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -1.4, 0]}
          opacity={0.75}
          width={10}
          height={10}
          blur={2.6}
          far={2}
        />
        <Environment preset="city" />
      </Canvas>
      <HexColorPicker
        className="picker"
        color={meshColors[editingMesh]}
        onChange={(color) => {
          updateMeshColors(color);
        }}
      />
    </>
  );
}
