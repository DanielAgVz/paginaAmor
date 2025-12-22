import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function GiftBox() {
  const [clicks, setClicks] = useState(0);
  const [openLetter, setOpenLetter] = useState(false);

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
          onClick={() => setClicks((prev) => prev + 1)}
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

        {/* Texto progresivo */}
        {clicks < 4 && <p className="gift-message">Tócalo 🎁</p>}

        {clicks >= 4 && (
          <div className="gift-after">
            <p className="gift-message">
              Aún no es diciembre amor 💕
            </p>
            <p className="gift-but">Pero…</p>

            {/* Botón carta */}
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
                Aunque aún no sea diciembre mi vida , no queria hacerte esperar mas para
                recordarte cuánto te amo. espero que te guste lo que aparecera 
                el 24 de Dic mi vida.
              </p>

              <p className="signature">
                Con todo mi amor mi ❤️
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
