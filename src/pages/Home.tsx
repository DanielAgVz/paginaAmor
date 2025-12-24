import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

import SingleDay from "../Funciones/SingleDay";
import GiftBox from "../Funciones/GiftBox";
import ChristmasCountdown from "../Funciones/ChristmasCountdown";

import "../App.css";

const DEV_FORCE_OPEN = true; // ⬅️ SOLO para pruebas


export default function Home() {
  //const [canOpenGift, setCanOpenGift] = useState(false);

  const [canOpenGift, setCanOpenGift] = useState(DEV_FORCE_OPEN);

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

        <ChristmasCountdown
          onChristmasReady={() => setCanOpenGift(true)}
        />

        <GiftBox canOpen={canOpenGift} />

        <footer className="footer">
          Hecho con amor infinito para ti ✨
        </footer>
      </motion.div>
    </div>
  );
}
