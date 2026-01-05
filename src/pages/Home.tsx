import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import SingleDay from "../Funciones/SingleDay";
//import ChristmasCountdown from "../Funciones/ChristmasCountdown";
import MarchCountdown from "../Funciones/MarchCountdown";

import "../App.css";
import "../styles/blobButton.css";
import "../styles/bottonfindeano.css";
import "../styles/gamepadButton.css";



export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="card"
      >
        {/* HEADER */}
        <header className="header">
          <h1 className="title">
            <Heart className="heart" size={32} />
            <Heart className="heart" size={32} />
            <Heart className="heart" size={32} />
            <Heart className="heart" size={32} />
            <Heart className="heart" size={32} />
            Para el amor de mi vida
            <Heart className="heart" size={32} />
            <Heart className="heart" size={32} />
            <Heart className="heart" size={32} />
            <Heart className="heart" size={32} />
            <Heart className="heart" size={32} />
          </h1>
        </header>

        {/* CONTENIDO */}
        <SingleDay />

        <MarchCountdown onReady={() => console.log("Llegó el 14 de febrero")} />


        {/* BOTÓN BLOB CON NIEVE */}
        <div className="buttons">
          <button
            className="blob-btn"
            onClick={() => navigate("/sorpresa")}
          >
            Ver día 24 Dic 2025

            {/* BLOB */}
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>

            {/* ❄️ NIEVE DENTRO DEL BOTÓN */}
            <span className="blob-btn__snow">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/*Botton Fin de año*/}
          <button
            className="firework-btn"
            onClick={() => navigate("/fin-de-ano")}>
            Ver día 31 Dic 2025

            {/* 🎆 FUEGOS ARTIFICIALES */}
            <span className="firework">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </span>
          </button>

          {/*Boton Juegos */}

          <button
            className="gamepad-btn"
            onClick={() => navigate("/games")}
          >
            {/* LADO IZQUIERDO */}
            <div className="gamepad-side left">
              <span className="stick"></span>
            </div>

            {/* CENTRO */}
            <div className="gamepad-center">
              <span className="start">START</span>
            </div>

            {/* LADO DERECHO */}
            <div className="gamepad-side right">
              <span className="btn a"></span>
              <span className="btn b"></span>
              <span className="btn x"></span>
              <span className="btn y"></span>
            </div>
          </button>



          {/* SVG GOOEY */}
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 21 -7
                  "
                />
                <feBlend in="SourceGraphic" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          Hecho con amor infinito para ti ✨
        </footer>
      </motion.div>
    </div>
  );
}
