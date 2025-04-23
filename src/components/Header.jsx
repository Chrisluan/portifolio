import {
  Box,
  Button,
  Image,
  Flex
} from "@chakra-ui/react";
import { Dropdown } from "./Dropdown";
import logo from "/LOGO.svg";
import { useEffect, useState } from "react";
const Header = () => {
  const [transparency, setTransparency] = useState(1);
  
  useEffect(() => {
    window.addEventListener('scroll', function() {
      setTransparency(Math.min(Math.max(1-(window.scrollY/1000), 0.4), 1))
  });
  });
  return (
    <Box
      as="header"
      sx={{
        position: "fixed",
        top:0,
        zIndex:2000,
        transition: "top 0.3s",        
        minHeight: "90px",
        display: "flex",
        width: "100%",
        
        justifyContent: "space-between",
      }}
    >
      <Box
        opacity={transparency}
        as="nav"
        alignItems={"center"}
        top={0}
        width={"100%"}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Image sx={{
          filter:"invert(1)"
        }} display={"flex"} width={"3rem"} src={logo} />
        <Flex alignItems={"center"} gap={5}>

        <Button
          height={"3rem"}
          
          color={"text.secondary"}
          backgroundColor={"background.inverted"}
          borderRadius={10}
          _hover={{
            background: "accent.500",
            color: "text.primary",
          }}
        >
          Start a conversation
        </Button>
        <Dropdown/>
        </Flex>
        
      </Box>
    </Box>
  );
};
export default Header;
