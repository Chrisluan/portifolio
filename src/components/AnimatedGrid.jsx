import { Box } from "@chakra-ui/react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MotionBox = motion(Box);

export default function AnimatedGrid() {
  const [isIdle, setIsIdle] = useState(true);
  const idleTimer = useRef(null);
  const intervalId = useRef(null);

  const x = useMotionValue(window.innerWidth / 2);
  const y = useMotionValue(window.innerHeight / 2);

  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsIdle(false);

      clearTimeout(idleTimer.current);
      clearInterval(intervalId.current);

      idleTimer.current = setTimeout(() => {
        setIsIdle(true);
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(idleTimer.current);
      clearInterval(intervalId.current);
    };
  }, [x, y]);

  useEffect(() => {
    if (isIdle) {
      intervalId.current = setInterval(() => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        x.set(randomX);
        y.set(randomY);
      }, 2000);
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

  const cellSize = 40; // define a célula quadrada de 40x40px
  const rows = Math.floor(dimensions.height / cellSize);
  const cols = Math.floor(dimensions.width / cellSize);

  return (
    <Box
      position="fixed"
      inset="0"
      w="100%"
      h="100%"
      zIndex={-1}
      overflow="hidden"
      pointerEvents="none"
      style={maskStyle}
    >
      {Array.from({ length: rows }).map((_, i) => (
        <MotionBox
          key={`row-${i}`}
          position="absolute"
          top={`${i * cellSize}px`}
          left="0"
          w="100%"
          h="2px"
          bg="whiteAlpha.300"
          animate={{ opacity: [0.2, 0.9, 0.5] }}
          transition={{
            duration: 3,
            delay: i * 0.95,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: cols }).map((_, i) => (
        <MotionBox
          key={`col-${i}`}
          position="absolute"
          left={`${i * cellSize}px`}
          top="0"
          h="100%"
          w="2px"
          bg="whiteAlpha.400"
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
