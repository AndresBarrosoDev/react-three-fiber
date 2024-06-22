import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  return (
    <Canvas camera={{ position: [3, 1, 5], fov: 80 }}>
      <Experience />
    </Canvas>
  );
}

export default App;
