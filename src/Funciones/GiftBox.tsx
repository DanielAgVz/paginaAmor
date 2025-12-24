import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function GiftBox({ canOpen }: { canOpen: boolean }) {
  const [clicks, setClicks] = useState(0);
  const [openLetter, setOpenLetter] = useState(false);

  const handleClick = () => {
    if (!canOpen) {
      setClicks((prev) => prev + 1);
    } else {
      setOpenLetter(true);
    }
  };

  return (
    <>
      <div className="gift-container">
        <motion.div
          className="gift-box"
          whileTap={{
            y: [-5, -20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          onClick={handleClick}
        >
          {/* Moño */}
          <div className="bow">
            <span className="bow-left" />
            <span className="bow-right" />
            <span className="bow-center" />
          </div>

          {/* Cintas */}
          <div className="gift-ribbon-vertical" />
          <div className="gift-ribbon-horizontal" />

          {/* Caja */}
          <div className="gift-body" />
        </motion.div>

        {/* ANTES DE NAVIDAD */}
        {!canOpen && clicks < 4 && (
          <p className="gift-message">Tócalo 🎁</p>
        )}

        {!canOpen && clicks >= 4 && (
          <div className="gift-after">
            <p className="gift-message">
              Ya faltan horas para que puedas abrirlo amor 💕
            </p>
            <p className="gift-but">Pero…</p>

            <motion.button
              className="letter-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenLetter(true)}
            >
              ✉️
            </motion.button>
          </div>
        )}

        {/* YA ES NAVIDAD */}
        {canOpen && (
          <p className="gift-message">
            🎄 Ábrelo mi amor 💖
          </p>
        )}
      </div>

      {/* CARTA */}
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
              className="letter-card"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{ originY: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Para ti, mi amor 💌</h3>

              <p>
                Ya faltan dos solo horas mi vida hermosa, sabes te amor y
                quiero recordarte cuánto te amo y que a las 12   
                podras abrir el regalo mi vida hermosa ❤️
              </p>

              <p className="signature">
                Con todo mi amor ❤️
              </p>

              <button onClick={() => setOpenLetter(false)}>
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
