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
              transition: "flex 0.3s",
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

        <Flex sx={{display:{base:"block",md:"none"}, padding: "40px", justifyContent: "center", w: "100%" }}>
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

          <TabPanel w={"90%"}>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)", // 2 colunas no celular
                md: "repeat(3, 1fr)", // 3 colunas no desktop
              }}
              gap={2}
              autoRows="minmax(100px, auto)"
            >
              {/* Imagem 1 */}
              <Box
                aspectRatio={"16/9"}
                height={"100%"}
                overflow={"hidden"}
                border="1px solid"
              >
                <Image
                  src="https://picsum.photos/200/300"
                  width={"100%"}
                  alt="Image"
                />
              </Box>

              {/* Imagem 2 */}
              <Box
                aspectRatio={"16/9"}
                height={"100%"}
                overflow={"hidden"}
                border="1px solid"
              >
                <Image
                  src="https://picsum.photos/200/300"
                  width={"100%"}
                  alt="Image"
                />
              </Box>

              {/* Imagem 3 */}
              <Box
                aspectRatio={"16/9"}
                height={"100%"}
                overflow={"hidden"}
                border="1px solid"
              >
                <Image
                  src="https://picsum.photos/200/300"
                  width={"100%"}
                  alt="Image"
                />
              </Box>

              {/* Imagem 4 */}
              <Box
                aspectRatio={"16/9"}
                height={"100%"}
                overflow={"hidden"}
                border="1px solid"
              >
                <Image
                  src="https://picsum.photos/200/300"
                  width={"100%"}
                  alt="Image"
                />
              </Box>

              {/* Imagem 5 */}
              {/* Caixa do Meio (exclusiva para o desktop) */}
              <Box
                aspectRatio={"16/9"}
                height={"100%"}
                overflow={"hidden"}
                
                display={{ base: "none", md: "block" }} // Oculta no mobile
                position="relative"
              >
                <Flex
                  sx={{justifyContent: "center", alignItems:"center", height:"100%"}}
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
              </Box>

              {/* Imagem 6 */}
              <Box
                aspectRatio={"16/9"}
                height={"100%"}
                overflow={"hidden"}
                border="1px solid"
              >
                <Image
                  src="https://picsum.photos/200/300"
                  width={"100%"}
                  alt="Image"
                />
              </Box>

              {/* Imagem 7 */}
              <Box
                aspectRatio={"16/9"}
                height={"100%"}
                overflow={"hidden"}
                border="1px solid"
              >
                <Image
                  src="https://picsum.photos/200/300"
                  width={"100%"}
                  alt="Image"
                />
              </Box>

              {/* Imagem 8 */}
              <Box
                aspectRatio={"16/9"}
                height={"100%"}
                overflow={"hidden"}
                border="1px solid"
              >
                <Image
                  src="https://picsum.photos/200/300"
                  width={"100%"}
                  alt="Image"
                />
              </Box>

              <Box
                aspectRatio={"16/9"}
                height={"100%"}
                overflow={"hidden"}
                border="1px solid"
              >
                <Image
                  src="https://picsum.photos/200/300"
                  width={"100%"}
                  alt="Image"
                />
              </Box>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  );
};

export default Gallery;
