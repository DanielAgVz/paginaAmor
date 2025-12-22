import { motion } from "framer-motion";

export default function ChristmasCountdown() {
  const today = new Date();
  const currentYear = today.getFullYear();

  // Navidad del año actual
  let christmas = new Date(currentYear, 11, 24);

  // Si ya pasó el 24, usamos el próximo año
  if (today > christmas) {
    christmas = new Date(currentYear + 1, 11, 24);
  }

  const diffTime = christmas.getTime() - today.getTime();
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <motion.div
      className="christmas"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="christmas-text">
        Faltan <strong>{daysLeft}</strong> días para Navidad
      </span>
      <span className="christmas-tree">🎄</span>
    </motion.div>
  );
}
