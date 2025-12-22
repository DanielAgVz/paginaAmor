import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import SingleDay from "./Funciones/SingleDay";
import GiftBox from "./Funciones/GiftBox"
import ChristmasCountdown from "./Funciones/ChristmasCountdown"


import "./App.css";

export default function App() {
  return (
    <div className="page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="card"
      >
        <header className="header">
          <h1 className="title">
            <Heart className="heart" size={32} />
            Para el amor de mi vida
            <Heart className="heart" size={32} />
          </h1>
        </header>

        <SingleDay />
        <ChristmasCountdown />
        <GiftBox />


        <footer className="footer">
          Hecho con amor infinito para ti ✨
        </footer>
      </motion.div>
    </div>
  );
}
