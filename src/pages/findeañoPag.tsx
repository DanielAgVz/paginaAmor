import { motion, useScroll, useTransform } from "framer-motion";
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

    </div>
  );
}
