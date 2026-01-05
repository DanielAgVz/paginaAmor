import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function GamesPag() {
    const navigate = useNavigate();

    const [score, setScore] = useState(0);
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [timeLeft, setTimeLeft] = useState(30);
    const [started, setStarted] = useState(false);

    // 🐱 MOVER GATO
    const moveCat = () => {
        if (!started) setStarted(true);
        if (timeLeft <= 0) return;

        const x = Math.random() * 80 + 5;
        const y = Math.random() * 80 + 5;

        setPosition({ x, y });
        setScore((prev) => prev + 1);
    };

    // ⏱️ CONTADOR DE 1 MINUTO
    useEffect(() => {
        if (!started || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((t) => t - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [started, timeLeft]);

    // 🔁 REINICIAR JUEGO
    const restartGame = () => {
        setScore(0);
        setTimeLeft(60);
        setStarted(false);
        setPosition({ x: 50, y: 50 });
    };

    return (
        <div className="page">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="card"
            >
                <h1>🎮 Atrapa al Gatito</h1>

                <p>⏱️ Tiempo: <strong>{timeLeft}s</strong></p>
                <p>🐾 Saltos: <strong>{score}</strong></p>

                {/* ÁREA DE JUEGO */}
                <div className="game-area">
                    {timeLeft > 0 && (
                        <motion.img
                            src="gatitocarta.png"
                            alt="Gatito"
                            className="cat-target"
                            style={{
                                left: `${position.x}%`,
                                top: `${position.y}%`,
                            }}
                            onClick={moveCat}
                            whileTap={{ scale: 0.8 }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.4 }}
                            draggable={false}
                        />
                    )}
                </div>

                {/* 🎉 FIN DEL JUEGO */}
                {timeLeft === 0 && (
                    <>
                        <h3>🎉 ¡Tiempo terminado!</h3>
                        <p>Panchito salto  <strong>{score}</strong> de veces</p>
                        <button onClick={restartGame}>Reintentar</button>
                    </>
                )}

                <button onClick={() => navigate("/")}>
                    Volver al inicio
                </button>
            </motion.div>
        </div>
    );
}
