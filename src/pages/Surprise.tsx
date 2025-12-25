import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


const images = [
  "/Img/foto1.jpeg",
  "/Img/foto2.jpeg",
  "/Img/foto3.jpeg",
  "/Img/foto4.jpeg",
  "/Img/foto5.jpeg",
];


export default function Surprise() {
  const [index, setIndex] = useState(0);
  const [openLetter, setOpenLetter] = useState(false);

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div
      className="surprise-page"
      style={{ backgroundImage: "url(/bg-navidad.jpg)" }}
    >
      {/* ❄️ NIEVE */}
      <div className="snow">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      {/* 💖 CONTENIDO */}
      <motion.div
        className="surprise-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="surprise-title">
          Feliz Navidad <br /> Amor mío 🎄❤️
        </h1>

        {/* 📸 CARRUSEL */}
        <div className="carousel">
          <button onClick={prev}>◀</button>

          <motion.img
            key={index}
            src={images[index]}
            className="carousel-img"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <button onClick={next}>▶</button>
        </div>

        {/* 💌 CARTA */}
        <div className="gift-after">
          <p className="gift-but">Tengo algo especial para ti 💌</p>

          <button
            className="letter-button"
            onClick={() => setOpenLetter(true)}
          >
            ✉️
          </button>
        </div>
      </motion.div>

      {/* 📨 MODAL CARTA */}
      <AnimatePresence>
        {openLetter && (
          <motion.div
            className="letter-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="letter-card"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ duration: 0.4 }}
            >
              <h3>Feliz Navidad, mi amor 🎄❤️</h3>

              <p>
                Gracias mi vida hermosa por compartir tu vida conmigo,  
                Hoy celebramos nuestra <strong>cuarta Navidad juntos</strong>,
                y cada una ha sido más especial que la anterior te amo mi vida hermosa.
              </p>

              <p>
                Que esta Navidad esté llena de amor, paz y sonrisas, por que la otra navidad la pasaremos juntos,
                y que sigamos creando recuerdos hermosos como lo hemos echos mi vida
                te amo, te adoro mi vida hermosa eres mi mundo.
              </p>

              <p className="signature">
                Con todo mi amor 💖
              </p>

              <button onClick={() => setOpenLetter(false)}>
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
