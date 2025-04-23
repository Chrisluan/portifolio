import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
export const PortCard = ({ image, title, description }) => {
  return (
    <Box>
      <Flex
        aspectRatio={{base:"20/16",md:"16/9"}}
        border={"solid 1px"}
        width={"100%"}
        overflow={"hidden"}
        direction="column"
        align="center"
        justify="center"
        
      >
        {
            image ? (
                <Image p={0} src={image} alt={title}/>
            ):(
                <Text sx={{
                    fontFamily:"coolvetica",
                    fontSize:"auto",
                    textAlign:"center",
                    lineHeight:"20px"
                }}>Currently in <br></br>Progress</Text>
            )
        }
        
      </Flex>
    </Box>
  );
};
