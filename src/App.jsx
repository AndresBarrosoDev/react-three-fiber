import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  return (
    <Canvas camera={{ position: [1, 1, 2.8], fov: 80 }}>
      <Experience />
    </Canvas>
  );
}

export default App;
