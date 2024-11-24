import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import Translations from '../components/Translations.jsx'
import LOGO from "/LOGO.svg";
import Section from "../Section";
const Hello = () => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const {t, changeLanguage} = Translations();
  const [currentLanguage, setCurrentLanguage] = useState('it');
  const handleChangeLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <Section justifyContent={"space-around"}>
      <Flex width={"100%"} alignItems={"center"} paddingTop={20}>
        <Flex
          width={"100%"}
          minWidth={"90%"}
          flexDir={isMobile ? "column" : "row"}
          justifyContent={"space-between"}
          alignItems={isMobile ? "center" : "start"}
          textAlign={isMobile ? "center" : "start"}
          gap={"50px"}
        >

          <Flex flexDir={'column'} alignItems={isMobile ? 'center':'start'} >
            <Text
              as={"h1"}
              lineHeight={isMobile ? "40px" : "70px"}
              style={{ fontSize: isMobile ? "2rem" : "3.5rem" }}
              fontFamily={"coolvetica"}
            >
              {t('landing.title')}
            </Text>
            <Text
              fontSize={isMobile ? "1.2rem" : "1.6rem"}
              variant={"h3"}
              maxWidth={"30ch"}
            >
              {t('landing.subtitle')}
            </Text>
          </Flex>

          <Image alt="Chrisluan Lucas Gomes da Silva Logotipo" width={isMobile ? "15rem" : "30rem"} src={LOGO} />
        </Flex>
      </Flex>
    </Section>
  );
};
export default Hello;
