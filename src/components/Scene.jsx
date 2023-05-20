import Model from "./Model";
import MODEL_URLS from "../MODEL_URLS.json";

export default function Scene() {
  return (
    <group>
      {MODEL_URLS.map((item, index) => (
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
