import CustomizableModel from "../components/CustomizableModel";
import { useRoute } from "wouter";
import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { selectCollections } from "../redux/shop/selectors";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cart.actions";
import { selectCartItems } from "../redux/cart/cart.selectors";

function ProductDetail({ collections, cartItems, addItem }) {
  const [match, params] = useRoute("/:productId");
  const { productId } = params;
  const [product, setProduct] = useState({});
  const [meshColors, setMeshColors] = useState({});
  const [editingMesh, setEditingMesh] = useState({});
  const modelRef = useRef();
  useEffect(() => {
    const currentModel = collections.find((item) => item.id == productId);
    setProduct(currentModel);
  }, [productId]);
  {
    console.log(product);
  }
  const updateMeshColors = (newMeshColors) => {
    setMeshColors((prevColors) => ({
      ...prevColors,
      [editingMesh]: newMeshColors,
    }));
  };

  return (
    <>
      <button
        style={{ position: "absolute", zIndex: 10 }}
        onClick={() => modelRef.current.navigate()}
      >
        {" "}
        {"<"}{" "}
      </button>

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
            ref={modelRef}
            position={[0, -120, 0]}
            id={productId}
            url={product.url}
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

      <button
        style={{ position: "absolute", zIndex: 10, bottom: 10 }}
        onClick={() => {
          addItem(product);
          // modelRef.current.navigate();
        }}
      >
        Add to cart and continue shopping
      </button>
    </>
  );
}

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (product) => dispatch(addItem(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
