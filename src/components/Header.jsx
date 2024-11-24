import {
  Box,
  Button,
  Image
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
        transition: "top 0.3s",        
        minHeight: "90px",
        display: "flex",
        width: "100%",
        background: "white",
        opacity: transparency,
        justifyContent: "space-between",
      }}
    >
      <Box
        as="nav"
        alignItems={"center"}
        top={0}
        width={"100%"}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Image display={"flex"} width={"3rem"} src={logo} />
        <Box>
        <Button
          height={"3rem"}
          border={"2px solid black"}
          color={"white"}
          backgroundColor={"black"}
          borderRadius={0}
          _hover={{
            background: "white",
            color: "black",
          }}
        >
          Start a conversation
        </Button>
        <Dropdown/>
        </Box>
        
      </Box>
    </Box>
  );
};
export default Header;
