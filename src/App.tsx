import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Surprise from "./pages/Surprise";
import FindeañoPag from "./pages/findeañoPag";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sorpresa" element={<Surprise />} />
      <Route path="/fin-de-ano" element={<FindeañoPag />} />
    </Routes>
  );
}
