import { Box } from "@chakra-ui/react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MotionBox = motion(Box);

const rows = 30;
const cols = 20;

export default function AnimatedGrid() {
  const [isIdle, setIsIdle] = useState(false);

  const idleTimer = useRef(null);
  const intervalId = useRef(null);

  // Motion values para animar a posição suavemente
  const x = useMotionValue(window.innerWidth / 2);
  const y = useMotionValue(window.innerHeight / 2);

  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsIdle(false);

      clearTimeout(idleTimer.current);
      clearInterval(intervalId.current);

      idleTimer.current = setTimeout(() => {
        setIsIdle(true);
      }, 2000); // após 2s sem mexer, entra no modo idle
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(idleTimer.current);
      clearInterval(intervalId.current);
    };
  }, [x, y]);

  // Movimento automático suave quando parado
  useEffect(() => {
    if (isIdle) {
      intervalId.current = setInterval(() => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        x.set(randomX);
        y.set(randomY);
      }, 2000); // muda a posição a cada 2 segundos
    } else {
      clearInterval(intervalId.current);
    }
  }, [isIdle, x, y]);

  const [maskStyle, setMaskStyle] = useState({});

  useEffect(() => {
    const unsubscribeX = springX.on("change", (latestX) => {
      setMaskStyle((prev) => ({
        ...prev,
        maskImage: `radial-gradient(circle 200px at ${latestX}px ${springY.get()}px, white 0%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle 200px at ${latestX}px ${springY.get()}px, white 0%, transparent 100%)`,
      }));
    });

    const unsubscribeY = springY.on("change", (latestY) => {
      setMaskStyle((prev) => ({
        ...prev,
        maskImage: `radial-gradient(circle 200px at ${springX.get()}px ${latestY}px, white 0%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle 200px at ${springX.get()}px ${latestY}px, white 0%, transparent 100%)`,
      }));
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [springX, springY]);

  const rowLines = Array.from({ length: rows });
  const colLines = Array.from({ length: cols });

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      w="100%"
      h="100%"
      zIndex={-1}
      overflow="hidden"
      pointerEvents="none"
      style={maskStyle}
    >
      {rowLines.map((_, i) => (
        <MotionBox
          key={`row-${i}`}
          position="absolute"
          top={`${(100 / rows) * i}%`}
          left="0"
          w="100%"
          h="2px"
          bg="whiteAlpha.900"
          animate={{ opacity: [0.2, 0.9, 0.5] }}
          transition={{
            duration: 3,
            delay: i * 0.95,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {colLines.map((_, i) => (
        <MotionBox
          key={`col-${i}`}
          position="absolute"
          left={`${(100 / cols) * i}%`}
          top="0"
          h="100%"
          w="2px"
          bg="whiteAlpha.900"
          animate={{ opacity: [0.2, 0.9, 0.5] }}
          transition={{
            duration: 3,
            delay: i * 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </Box>
  );
}
