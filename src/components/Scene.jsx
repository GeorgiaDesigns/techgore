import { selectCollections } from "../redux/shop/selectors";
import { connect } from "react-redux";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Scene({ collections, setSelectedModel, ...props }) {
  const objectRef = useRef();
  const modelInstance = new THREE.Object3D();

  useEffect(() => {
    const loadModels = async () => {
      const loader = new GLTFLoader();

      for (const item of collections) {
        const gltf = await loader.loadAsync(item.url);
        const model = gltf.scene.clone();
        model.position.set(modelInstance.children.length * 120, -100, 0);
        modelInstance.attach(model);
        model.userData.onClick = handleModelClick;
      }

      objectRef.current.add(modelInstance);
    };

    if (collections.length) {
      loadModels();
    }

    return () => {
      // objectRef.current.clear();
      while (modelInstance.children.length) {
        modelInstance.remove(modelInstance.children[0]);
      }
    };
  }, [collections]);

  const handleModelClick = (event) => {
    const model = event.object.parent.parent.parent;
    // modelInstance.children.forEach((child) => {
    //   if (child !== model) {
    //     child.visible = false;
    //   }
    // });
    // setSelectedModel(child.clone());
  };

  return (
    <group ref={objectRef} {...props} onClick={handleModelClick} scale={0.03} />
  );
}

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(Scene);
