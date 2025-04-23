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
        
      >
      <Flex padding={2} background={image}>
        <Image height="100%" top={0} objectFit={"scale-down"} src={image} alt={title} />
      </Flex>

      <Flex flexDir={"column"} gap={5} padding={10}>
        
        <Flex paddingTop={5} flexDir={"column"} color={"text.secondary"}>
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
