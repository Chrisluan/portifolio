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
import Translations from "../components/Translations";
const Gallery = () => {
  const [currentTab, setCurrentTab] = useState("Graphic Design");

  const {t, changeLanguage} = Translations();
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
            {t('portifolio')}
          </Text>
          <Text
            sx={{
              width: "100%",
              marginTop: "-37px",
              fontSize: "100px",
              color: "accent.500",
              fontFamily: "coolvetica",
              p: 0,
              
            }}
          >
            {t('work')}
          </Text>
        </Flex>
      </Flex>

      <Tabs
        variant="unstyled"
        sx={{
          width: "100%",
        }}
        onChange={(index) => {
          const tabNames = ["Web Design", "Graphic Design", "Motion Design"];
          setCurrentTab(tabNames[index]);
        }}
      >
        <TabList
          
          
          sx={{
            "& > *": {
              padding:"20px",
              fontFamily:"coolvetica",
              width: "50%",
              border:"1px solid",
              borderColor:"background.contrast",
              flex:1,
              color: "#FFF",
              fontWeight: 200,
              transition: "all 0.2s",
              _selected:{
                backgroundColor:"background.contrast",
                flex:1.2
            },
            },
            
          }}
        >
          <Tab borderLeftRadius={"10px"}>Web</Tab>
          <Tab>Graphic</Tab>
          <Tab borderRightRadius={"10px"}>Motion</Tab>
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

              
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  );
};

export default Gallery;
