import { Box, Divider } from "@chakra-ui/react";
const Section = ({ children, justifyContent, alignItems, maxHeight = '100vh' }) => {
  return (
    <>
      <Box
        as="section"
        marginInline={"10%"}
        paddingBottom={'30px'}
        paddingTop={'30px'}
        height={maxHeight} 
        display={"flex"}
        alignItems={alignItems}
        justifyContent={justifyContent}
      >
        {children}
      </Box>
      
    </>
  );
};
export default Section;
