import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
export const PortCard = ({ image, title, description, link }) => {
  return (
    <Box>
      <Flex
        role="group"
        height={"400px"}
        border={"solid 1px"}
        width={"100%"}
        overflow={"hidden"}
        direction="column"
        backgroundColor={"background.inverted"}
        borderRadius={10}
        boxSize={"border-box"}
      >
        <Box position="relative">
          {/* Blur background */}
          <Flex
            pos="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            backgroundImage={`url(${image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            filter="blur(10px)"
            transform="scale(1.1)"
            opacity={0.2}
            transition="all 0.5s ease"
            mixBlendMode={"color-burn"}
            _groupHover={{
              filter: "blur(20px)", // Blur ainda mais forte no hover
              opacity: 0.6, // Aumenta opacidade
              transform: "scale(1.3)", // Amplia o fundo pra dar mais profundidade
            }}
          />

          {/* Image on top */}
          <Image
            height="100%"
            w="100%"
            zIndex={2}
            objectFit="cover"
            src={image}
            alt={title}
            transition="all 0.5s ease"
            position="relative"
            _hover={{
              filter: "brightness(1.1)", // Fica levemente mais clara
            }}
          />
        </Box>

        <Flex flexDir={"column"} gap={5} padding={10}>
          <Flex flexDir={"column"} color={"text.secondary"}>
            <Heading fontSize={"xx-large"} color={"text.secondary"}>
              {title}
            </Heading>
            <Text>{description}</Text>
          </Flex>

          <Flex justifyContent="space-between" alignItems="center">
            <Button
              sx={{
                backgroundColor: "accent.500",
                color: "text.primary",
                _hover: {
                  backgroundColor: "accent.600", // Um tom mais escuro para hover
                },
                _active: {
                  backgroundColor: "accent.700", // Um tom mais escuro para o estado ativo
                },
              }}
            >
              About
            </Button>

            <IconButton
              onClick={() => {
                window.open(link, "_blank", "noopener,noreferrer");
              }}
            >
              <FiExternalLink color="#25272e"></FiExternalLink>
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
