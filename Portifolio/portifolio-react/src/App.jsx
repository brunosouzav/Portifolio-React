import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StarField from "../src/components/StarField";

import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Skills from '../src/pages/Skills';
import Email from '../src/pages/Email';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Envolvendo com Router para gerenciar rotas */}
      <Navbar /> {/* Barra de navegação */}
      <Canvas 
        camera={{ position: [0, 0, 10] }} 
        style={{ 
          background: "black", 
          position: "absolute", 
          top: "0", 
          left: "0", 
          width: "100%", 
          height: "100%", 
          zIndex: -1 
        }}
      >
        <StarField />
      
      </Canvas>

      <div className="container-app" style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/email" element={<Email />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    
    </Router>
  );
}

export default App;