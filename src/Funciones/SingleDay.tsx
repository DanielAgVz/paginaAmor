import { motion } from "framer-motion";

export default function SingleDay() {
  const today = new Date();

  const day = today.getDate();
  const month = today.toLocaleDateString("es-ES", { month: "long" });
  const year = today.getFullYear();
  const weekDay = today.toLocaleDateString("es-ES", { weekday: "long" });

  return (
    <motion.div
      className="single-day"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <span className="day-number">{day}</span>
      <span className="week-day">{weekDay}</span>
      <span className="month-year">
        {month} {year}
      </span>
    </motion.div>
  );
}
