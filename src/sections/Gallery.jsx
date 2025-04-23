import React, { useState } from "react";
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
import "../styles/styles.css"
import Section from "../Section";
import { PortCard } from "../components/PortCard";
import portifolio from "../miscellaneos/portifolio.json";
const Gallery = () => {
  const [currentTab, setCurrentTab] = useState("Graphic Design");


  return (
    <Section alignItems={"center"} flexDir={"column"} maxHeight="fit-content">
      <Flex
        width={"90%"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        height={"fit-content"}
      >
        

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
              marginTop: "-37px",
              fontSize: "100px",
              color: "#000",
              fontFamily: "coolvetica",
              p: 0,
            }}
          >
            Work
          </Text>
        </Flex>
      </Flex>

      <Tabs
        variant="unstyled"
        sx={{
          width: "100%",
        }}
        onChange={(index) => {
          const tabNames = ["Graphic Design", "Motion Design", "Web Design"];
          setCurrentTab(tabNames[index]);
        }}
      >
        <TabList
          
          
          sx={{
            "& > *": {
              width: "50%",
              border:"1px solid gray",
              transition: "all 0.2s",
              color: "#FFF",
              fontWeight: "bold",
            },
          }}
        >
          <Tab borderLeftRadius={"10px"} flex={1}>Web</Tab>
          <Tab flex={1}>Graphic</Tab>
          <Tab borderRightRadius={"10px"} flex={1}>Motion</Tab>
        </TabList>

        <Flex
          sx={{
            display: { base: "flex", md: "none" },
            paddingY: "30px",
            justifyContent: "center",
            alignItems: "center",
            w: "100%",
          }}
        >
          <Text
            sx={{
              maxWidth: "200px",
              fontFamily: "coolvetica",
              lineHeight: "40px",
              textAlign: "center",
              fontSize: "3rem",
            }}
          >
            {currentTab}
          </Text>
        </Flex>

        <TabPanels display="flex" minHeight={"400px"} justifyContent={"center"}>
          <TabPanel w={{base:"100%", md:"90%"}}>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)", // 2 colunas no mobile
                md: "repeat(3, 1fr)", // 3 colunas no desktop
              }}
              gap={{ base: "0", md: "2" }} // Sem espaçamento no mobile
              autoRows={{ base: "auto", md: "minmax(100px, auto)" }} // Ajuste automático no mobile
            >
              
              {portifolio.web.map((project, index) => (
                <PortCard
                  image={project.previewImage}
                  title={project.title}
                  key={index}
                />
              ))}

              {/* Exclusive desktop box as 5th item */}
              <Box
                aspectRatio={"16/9"}
                height={"100%"}
                overflow={"hidden"}
                display={{ base: "none", md: "block" }} // Hidden on mobile
                position="relative"
                sx={{
                  gridColumn: "2", // Place in the 2nd column
                  gridRow: "2", // Place in the 2nd row
                }}
              >
                <Flex justifyContent="center" alignItems="center" height="100%">
                  <Text
                    sx={{
                      maxWidth: "200px",
                      fontFamily: "coolvetica",
                      lineHeight: "40px",
                      textAlign: "center",
                      fontSize: "3rem",
                    }}
                  >
                    {currentTab}
                  </Text>
                </Flex>
              </Box>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  );
};

export default Gallery;
