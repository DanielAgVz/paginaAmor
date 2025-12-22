import { motion } from "framer-motion";

export default function GiftBox() {
  return (
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
      >
        {/* Moño */}
        <div className="bow">
          <span className="bow-left" />
          <span className="bow-right" />
          <span className="bow-center" />
        </div>

        {/* Cinta */}
        <div className="gift-ribbon-vertical" />
        <div className="gift-ribbon-horizontal" />

        {/* Caja */}
        <div className="gift-body" />
      </motion.div>

      <p className="gift-message">Tócalo 🎁</p>
    </div>
  );
}
