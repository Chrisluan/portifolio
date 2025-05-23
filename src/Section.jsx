import { Box } from "@chakra-ui/react";
const Section = ({ children, justifyContent, bg, alignItems, maxHeight = '100vh', flexDir, }) => {
  return (
      <Box
        as="section"
        marginInline={"10%"}
        paddingBottom={'30px'}
        paddingTop={'30px'}
        height={maxHeight} 
        display={"flex"}
        alignItems={alignItems}
        justifyContent={justifyContent}
        flexDir={flexDir}
        bg={bg}
      >
        {children}
      </Box>
  );
};
export default Section;
