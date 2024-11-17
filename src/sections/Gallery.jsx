import React from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import Section from "../Section";

const Gallery = () => {
  const categories = {};

  return (
    <Section alignItems={"center"} flexDir={"column"}>
      <Flex
        width={"90%"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        height={"fit-content"}
      >
        <Box
          sx={{
            width: "20%",
            height: "0.5rem",
            backgroundColor: "#0077FF",
          }}
        />

        <Flex flexDir={"column"} textAlign={"center"}>
          <Text
            flex={2}
            fontFamily={"coolvetica"}
            lineHeight={"100%"}
            fontSize={{ base: "2.2rem", md: "3rem" }}
            textAlign={"center"}
            m={0}
          >
            A bit of my
          </Text>
          <Text
            sx={{
              width: "100%",
              marginTop: "-40px",
              fontSize: "100px",
              color: "#0077FF",
              fontFamily: "coolvetica",
              p: 0,
            }}
          >
            Work
          </Text>
        </Flex>

        <Box
          sx={{
            width: "20%",
            height: "0.5rem",
            backgroundColor: "#0077FF",
          }}
        />
      </Flex>

      <Tabs variant="soft-rounded">
        <TabList justifyContent="center" mb={4}>
          {Object.keys(categories).map((category, index) => (
            <Tab key={index}>{category}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {Object.keys(categories).map((category, index) => (
            <TabPanel key={index}>
              <Grid
                templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                gap={4}
              >
                {categories[category].map((item, index) => (
                  <Box key={index}>
                    <Image src={item.image} />
                    <Text>{item.title}</Text>
                  </Box>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Section>
  );
};

export default Gallery;