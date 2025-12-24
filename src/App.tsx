import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Surprise from "./pages/Surprise";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sorpresa" element={<Surprise />} />* 
    </Routes>
  );
}
