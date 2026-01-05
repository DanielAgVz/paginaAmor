import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "../styles/StyPagFindeano.css";


/* 💕 COMPONENTE REUTILIZABLE */
function ScrollCard({ img, text }: { img: string; text: string }) {
  return (
    <motion.div
      className="scroll-card"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img src={img} alt="" />
      <p>{text}</p>
    </motion.div>
  );
}

export default function FindeañoPag() {
  const { scrollY } = useScroll();

  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleY = useTransform(scrollY, [0, 300], [0, -80]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.85]);
  const [openLetter, setOpenLetter] = useState(false);

  return (
    <div className="newyear-page">

      {/* 🎆 FUEGOS */}
      <div className="fireworks left">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="fireworks right">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      {/* 🟣 HERO */}
      <section className="hero-section">

        {/* 🎆 FUEGOS */}
        <div className="fireworks left">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <div className="fireworks right">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <motion.h1
          className="newyear-title"
          style={{
            opacity: titleOpacity,
            y: titleY,
            scale: titleScale
          }}
        >
          🎉 Feliz Año 🎉
        </motion.h1>
        <motion.p
          className="newyear-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          ❤️ Amor, te amo ❤️
        </motion.p>

      </section>

      {/* 📸 CONTENIDO */}
      <section className="scroll-section">
        <ScrollCard img="/Img/amor1.jpeg" text="Cada año a tu lado mi cielo es un regalo 🎁" />
        <ScrollCard img="/Img/amor2.jpeg" text="Cada sonrisa compartida contigo amor 💖" />
        <ScrollCard img="/Img/amor3.jpeg" text="Este es la navidad numero 3 de nuestro hijo deseado" />
        <ScrollCard img="/Img/amor4.jpeg" text="Amor que este nuevo año sea nuestro mejor capítulo mi vida, te amo mi vida✨" />
      </section>

      {/* ✉️ ICONO DE CARTA */}
      <div className="letter-container">
        <motion.button
          className="letter-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenLetter(true)}
        >
          ✉️
        </motion.button>
      </div>

      {/* 💌 MODAL CARTA */}
      <AnimatePresence>
        {openLetter && (
          <motion.div
            className="letter-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenLetter(false)}
          >
            <motion.div
              className="letter-modal"
              initial={{ scale: 0.6, rotateX: -90, opacity: 0 }}
              animate={{ scale: 1, rotateX: 0, opacity: 1 }}
              exit={{ scale: 0.6, rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>💌</h2>
              <p>Te amo mi vida hermosa, esta parte la puse hace poco
                y ese hace poco es despues de lo mal que te hice pasar
                el 31, ya te e dicho lo que voy hacer solo queria decirte
                que te amo y te lo demostrare, por cierto aqui te tenia
                era una play list❤️</p>
              
              <a
                href="https://open.spotify.com/playlist/5lNarGoe2hoig3bu6MAW0q"
                target="_blank"
                rel="noopener noreferrer"
                className="spotify-link"
              >
               Escuchar en Spotify
              </a>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}
