import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GiftBox({ canOpen }: { canOpen: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!canOpen) return;

    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className="gift-container">
      {/* CAJA */}
      <motion.div
        className="gift-box"
        onClick={handleClick}
        whileTap={!isOpen ? { y: [-5, -15, 0] } : {}}
      >
        {/* TAPA */}
        <motion.div
          className="gift-lid"
          animate={isOpen ? { y: -80, rotate: -15 } : { y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Moño */}
          <div className="bow">
            <span className="bow-left" />
            <span className="bow-right" />
            <span className="bow-center" />
          </div>
        </motion.div>

        {/* CUERPO */}
        <div className="gift-body">
          <div className="gift-ribbon-vertical" />
          <div className="gift-ribbon-horizontal" />
        </div>

        {/* CONTENIDO INTERNO */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="gift-content"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.button
                className="gift-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/sorpresa")}
              >
                💖 Ver sorpresa
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* MENSAJES */}
      {!canOpen && (
        <p className="gift-message">Tócalo 🎁</p>
      )}

      {canOpen && !isOpen && (
        <p className="gift-message">🎄 Ábrelo mi amor 💖</p>
      )}
    </div>
  );
}
