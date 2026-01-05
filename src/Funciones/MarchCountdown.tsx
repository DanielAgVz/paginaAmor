import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FebruaryCountdown({
  onReady,
}: {
  onReady?: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState<{
    days?: number;
    hours?: number;
    minutes?: number;
    ready?: boolean;
  }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // Año, Mes (0=Enero, 1=Febrero), Día
      const targetDate = new Date(2026, 1, 17, 0, 0, 0);

      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ ready: true });
        onReady?.();
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      if (days > 0) {
        setTimeLeft({ days });
      } else {
        setTimeLeft({ hours, minutes });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onReady]);

  return (
    <motion.div
      className="christmas-clock"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {timeLeft.ready ? (
        <h3 className="christmas-ready">❤️ ¡Llegó el 14 de febrero! ❤️</h3>
      ) : timeLeft.days !== undefined ? (
        <>
          <h4 className="clock-title">Cuenta regresiva para San Valentín</h4>

          <div className="clock-grid">
            <div className="clock-box">
              <span className="clock-number">{timeLeft.days}</span>
              <span className="clock-label">Días</span>
            </div>
          </div>
        </>
      ) : (
        <div className="clock-grid">
          <div className="clock-box">
            <span className="clock-number">{timeLeft.hours}</span>
            <span className="clock-label">Horas</span>
          </div>

          <div className="clock-box">
            <span className="clock-number">{timeLeft.minutes}</span>
            <span className="clock-label">Minutos</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
