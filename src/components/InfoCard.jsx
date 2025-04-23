import { Box, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
const InfoCard = ({ title = "Name", info = "chrisluan.dev@gmail.com" }) => {
const [isMobile] = useMediaQuery("(max-width: 900px)");
  return (
    <Box sx={{ fontSize: isMobile? '15px':'18px' }}>
      <Text color={"text"} fontWeight={"bold"}>
        {title}
      </Text>
      <Box
        sx={{
          backgroundColor: "background.inverted",
          padding: "5px",
          width: "24ch",
        }}
      >
      
        <Text color="text.secondary">{info}</Text>
      </Box>
    </Box>
  );
};
export default InfoCard;
