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

import Section from "../Section";
import { PortCard } from "../components/PortCard";
import portifolio from "../miscellaneos/portifolio.json";
const Gallery = () => {
  const [currentTab, setCurrentTab] = useState("Graphic Design");

  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/200/302",
    "https://picsum.photos/200/303",
    "https://picsum.photos/200/304",
    "https://picsum.photos/200/305",
    "https://picsum.photos/200/306",
    "https://picsum.photos/200/307",
  ];

  return (
    <Section alignItems={"center"} flexDir={"column"} maxHeight="fit-content">
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

        <Box
          sx={{
            width: "20%",
            height: "0.5rem",
            backgroundColor: "#0077FF",
          }}
        />
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
          justifyContent="center"
          gap={2}
          sx={{
            "& > *": {
              width: "50%",
              backgroundColor: "#000",
              transition: "flex 0.2s",
              color: "#FFF",
              fontWeight: "bold",
              _selected: {
                background: "transparent",
                color: "black",
                width: "100%",
                borderBottom: "solid 2px",
                flex: "2",
              },
            },
          }}
        >
          <Tab flex={1}>Graphic Design</Tab>
          <Tab flex={1}>Motion Design</Tab>
          <Tab flex={1}>Web Design</Tab>
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
              {}
              {portifolio.projects.map((project, index) => (
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
