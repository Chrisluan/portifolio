// src/components/GridLinesBackground.jsx
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const rows = 30;
const cols = 10;

export default function AnimatedGrid() {
  const rowLines = Array.from({ length: rows });
  const colLines = Array.from({ length: cols });

  return (
    <Box position="absolute" top={0} left={0} w="100%" h="100%" zIndex={-1} overflow="hidden">
      {/* Linhas horizontais */}
      {rowLines.map((_, i) => (
        <MotionBox
          key={`row-${i}`}
          position="absolute"
          top={`${(100 / rows) * i}%`}
          left="0"
          w="100%"
          h="1px"
          bg="whiteAlpha.100"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 5,
            delay: i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Linhas verticais */}
      {colLines.map((_, i) => (
        <MotionBox
          key={`col-${i}`}
          position="absolute"
          left={`${(100 / cols) * i}%`}
          top="0"
          h="100%"
          w="1px"
          bg="whiteAlpha.400"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 5,
            delay: i * 0.90,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </Box>
  );
}
