// src/components/FloatingBackground.jsx

import { Box, useToken } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Chakra Box com Motion
const MotionBox = motion(Box);



export default function FloatingBackground() {
  const accent = useToken("colors", "primary.500");

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      w="100%"
      h="100%"
      zIndex={-1}
      overflow="hidden"
    >
      {Array.from({ length: 20 }).map((_, index) => {
        const top = Math.random() * 100; // Random top position (between 0 and 100)
        const left = Math.random() * 500; // Random left position (between 0 and 100)
        const size = Math.random() * 20 + 10; // Random size between 10 and 30
        const delay = Math.random() * 3; // Random delay between 0 and 3 seconds

        return (
          <MotionBox
            key={index}
            position="absolute"
            top={`${top}%`}
            left={`${left}%`}
            w={`${size}px`}
            h={`${size}px`}
            bg={accent}
            borderRadius="full"
            opacity={0.2}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        );
      })}
    </Box>
  );
}
