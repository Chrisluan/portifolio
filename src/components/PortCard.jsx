import React from "react";
import { Box, Button, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
export const PortCard = ({ image, title, description, width, height }) => {
  return (
    <Box>
      <Flex
        height={"400px"}
        border={"solid 1px"}
        width={"100%"}
        overflow={"hidden"}
        direction="column"
        backgroundColor={"background.inverted"}
        borderRadius={10}
        boxSize={"border-box"}
        position="relative"
      >
      
      <Image height="100%" objectFit={"scale-down"} src={image} alt={title} />
      <Flex pos={"absolute"} w={"100%"} padding={2} backgroundImage={image} backgroundSize={"cover"} filter={"blur(1px)"}>
        
      </Flex>

      <Flex flexDir={"column"} gap={5} padding={10}>
        
        <Flex  flexDir={"column"} color={"text.secondary"}>
          <Heading fontSize={"xx-large"} color={"text.secondary"}>
            {title}
          </Heading>
          <Text>
            {description}
          </Text>
        </Flex>

        <Flex justifyContent="space-between" alignItems="center">
        <Button sx={{
            backgroundColor:"accent.500",
            color:"text.primary",
            _hover:{
              backgroundColor: "accent.500",
            },
            _active:{
              backgroundColor: "accent.500",
            }
        }}>
          About
        </Button>
        <IconButton>
          <FiExternalLink color="#25272e"></FiExternalLink>
        </IconButton>
      </Flex>
      </Flex>
      </Flex>
      
    </Box>
  );
};
