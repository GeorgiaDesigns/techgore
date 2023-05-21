import Model from "./Model";
import { selectCollections } from "../redux/shop/selectors";
import { connect } from "react-redux";
import { useRef, useEffect } from "react";

function Scene({ collections }) {
  const objectRef = useRef();

  // useEffect(() => {
  //   console.log(objectRef.current);
  //   return () => {
  //     objectRef.current.clear();
  //   };
  // }, []);

  return (
    <group ref={objectRef}>
      {collections.map((item, index) => (
        <Model
          key={item.id}
          position={[index * 120, -100, 0]}
          id={item.id}
          url={item.url}
        />
      ))}
    </group>
  );
}

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(Scene);
