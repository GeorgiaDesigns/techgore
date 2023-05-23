import CustomizableModel from "../components/CustomizableModel";
import ProductInfo from "../components/ProductInfo";
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
import { useLocation } from "wouter";
import Background from "./Background";

function ProductDetail({ collections, cartItems, addItem }) {
  const [match, params] = useRoute("/:productId");
  const { productId } = params;
  const [product, setProduct] = useState({});
  const [meshColors, setMeshColors] = useState({});
  const [editingMesh, setEditingMesh] = useState({});
  const [location, setLocation] = useLocation();

  const canvasRef = useRef();
  const [screenshotURL, setScreenshotURL] = useState(null);

  const takeScreenshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const dataURL = canvas.toDataURL();

    if (dataURL) {
      setScreenshotURL(dataURL);
    }
  };

  useEffect(() => {
    const currentModel = collections.find((item) => item.id == productId);
    setProduct(currentModel);
  }, []);

  const updateMeshColors = (newMeshColors) => {
    setMeshColors((prevColors) => ({
      ...prevColors,
      [editingMesh]: newMeshColors,
    }));
    takeScreenshot();
  };

  return (
    <div style={{ backgroundColor: "#dddddd" }}>
      <button
        style={{
          position: "absolute",
          zIndex: 10,
          transform: "rotate(90deg)",
          scale: "0.5",
        }}
        onClick={() => setLocation("/")}
      >
        <svg
          className="arrows"
          width="103"
          height="193"
          viewBox="0 0 103 193"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.603 102.087L45.6027 102.087L1.64029 58.4273C0.833493 57.6261 0.534497 56.9576 0.50289 56.3828C0.471082 55.8044 0.703841 55.2147 1.18708 54.5584C1.67226 53.8995 2.37067 53.2255 3.1889 52.4842C3.39142 52.3008 3.60121 52.1133 3.81563 51.9216C4.45436 51.3507 5.13415 50.7431 5.7851 50.0966C6.45829 49.428 7.05832 48.76 7.6008 48.1561C7.75992 47.979 7.91409 47.8073 8.0637 47.6428C8.73583 46.9037 9.30664 46.3192 9.85846 45.9432C10.3961 45.5769 10.8722 45.4381 11.3745 45.5254C11.8989 45.6164 12.5425 45.9688 13.3687 46.7894L51.1131 84.2889L51.4655 84.6389L51.8178 84.289L89.5705 46.7962C90.3917 45.9807 91.0557 45.6248 91.614 45.5317C92.157 45.4411 92.6813 45.586 93.2621 45.9554C93.8546 46.3322 94.4669 46.9178 95.1671 47.6524C95.3947 47.8913 95.6322 48.1466 95.8797 48.4127C96.3767 48.9469 96.9137 49.5241 97.4902 50.0966C98.0562 50.6587 98.6401 51.1962 99.1919 51.7042C99.4814 51.9707 99.762 52.2291 100.027 52.4785C100.811 53.2182 101.466 53.8904 101.909 54.5453C102.348 55.1952 102.547 55.7836 102.49 56.3675C102.433 56.9532 102.109 57.6298 101.299 58.4342L57.3366 102.094C55.7179 103.701 53.5937 104.5 51.4655 104.5C49.3418 104.5 47.2196 103.695 45.603 102.087Z"
            fill="#EB21BE"
          />
        </svg>
      </button>

      <Canvas
        style={{ height: "100vh", backgroundColor: "transparent" }}
        shadows
        gl={{ preserveDrawingBuffer: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4], fov: 50 }}
        ref={canvasRef}
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
            position={product.position}
            id={productId}
            url={product.url}
            meshColors={meshColors}
            setMeshColors={setMeshColors}
            updateCurrentMesh={setEditingMesh}
            onScreenshotTaken={setScreenshotURL}
          />
        </PresentationControls>
        {/* <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -1.4, 0]}
          opacity={0.75}
          width={10}
          height={10}
          blur={2.6}
          far={2}
        /> */}
        <Environment preset="city" />
      </Canvas>
      <HexColorPicker
        className="picker"
        color={meshColors[editingMesh]}
        onChange={(color) => {
          updateMeshColors(color);
        }}
      />

      <ProductInfo
        item={product}
        meshColors={meshColors}
        thumbnail={screenshotURL}
      />
      <Background />
    </div>
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
