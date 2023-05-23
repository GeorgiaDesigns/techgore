import { selectCollections } from "../redux/shop/selectors";
import { connect } from "react-redux";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLocation } from "wouter";
import { useLoader } from "@react-three/fiber";

function Scene({ collections }) {
  const objectRef = useRef();
  const modelInstance = new THREE.Object3D();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const loadModels = async () => {
      const loader = new GLTFLoader();

      for (const item of collections) {
        const gltf = await loader.loadAsync(item.url);
        const model = gltf.scene.clone();
        model.name = item.id;
        model.position.set(modelInstance.children.length * 120, -100, -60);
        modelInstance.attach(model);
        model.userData.onClick = handleModelClick;
      }

      objectRef.current.add(modelInstance);
    };

    loadModels();

    return () => {
      while (modelInstance.children.length) {
        modelInstance.remove(modelInstance.children[0]);
      }
    };
  }, []);

  const handleModelClick = (event) => {
    const model = event.object.parent.parent.parent;
    setLocation(model.name);

    // modelInstance.children.forEach((child) => {
    //   if (child !== model) {
    //     child.visible = false;
    //   }
    // });
    // setSelectedModel(child.clone());
  };

  return <group ref={objectRef} onClick={handleModelClick} scale={0.03} />;
}

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(Scene);
